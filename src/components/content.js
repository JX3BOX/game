const { JX3BOX,Utils } = require("@jx3box/jx3box-common");
const URI = require("urijs");
import UA from "../utils/ua";
import '../utils/hash'

//解析查询参数
var query = URI(location.href).query(true);

// TODO:等待v2接口进行修改,需求 成就名称(GET) + 更新日期(GET) + 文章内容 + 难度星级 + 作者(POST) + 成就ID(POST)
jQuery(function($) {

    //加载数据
    $.ajax({
        url: `${JX3BOX.__helperUrl}api/achievement/` + query.id + "/posts",
        type: "GET",
        success: function(data) {

            //获取采用文章
            var list = data.data.posts;
            var post = list[0];
            var content = post ? Utils.resolveImagePath(post.content) : ''

            //有内容
            if(content){

                //加载内容
                // $('#stars').html(Math.min(Math.max(1,parseInt(val)),5)) 
                $('#updatetime').html(post.updated)
                $('#content').html(content)

                //检查图片加载
                Utils.checkImageLoad($('#content img'))

                //繁简切换
                setupTranslator(content)

                //编辑
                setupEditor(post)

                //统计
                setupStat(post)

            //没有内容
            }else{
                $('#content').text('💧暂无攻略') && $('#content').addClass("u-null")
            }

        },

        //异常
        error: function() {
            $('#content').text('⚠️数据加载异常') && $('#content').addClass("u-error")
        }

    });

});

//TODO:繁体转换
function setupTranslator(content){
    $('#translator').on('click',function (){
        $(this).toggleClass('on')
        $('#content').toggleClass('hide')
        $('#content-tw').toggleClass('hide')
    })
}

//TODO:编辑
function setupEditor(post){
    
    //预设值
    $('#author').val(query.player)
    // $('#level').val(query.player)
    
    bindEditEvent()

    bindCancelEvent()

    bindSubmitEvent()

}

function bindEditEvent(){
    $('#edit').on('click',function (){
        if($(this).hasClass('on')) return

        $(this).toggleClass('on')
        $('#content').addClass('isEditable')
        $('#content').attr('contenteditable',true)
        $('.m-author,.m-tips').removeClass('hide')
    })
}

function bindCancelEvent(){
    resetEditor()
}

function bindSubmitEvent(){
    var isChanged = false
    var hash_old = $('#content').html().hashCode()

    //检查
    $('#content').one('input',function (){
        isChanged = true
    })

    //提交
    $('#submit').on('click',function (){
        //确认有修改
        if(!isChanged) {
            alert('没有任何改动,请勿滥提交')
            return
        }

        //校验内容HASH
        var hash_new = $('#content').html().hashCode()
        if(hash_new == hash_old){
            alert('没有任何改动,请勿滥提交')
            return
        }

        // TODO:提交数据至接口

            //发布成功
            resetEditor()
        

        //发布失败
            // alert('提交成功,请等待审核')
    })
}

function resetEditor(){
    $('#edit').removeClass('on')
    $('#content').removeClass('isEditable')
    $('#content').attr('contenteditable',false)
    $('.m-author,.m-tips').addClass('hide')
}

//统计
function setupStat(post){
    UA()
    $.ajax({
        url: `${JX3BOX.__spider}jx3stat/cj`,
        type: "POST",
        data: {
            cjid: query.id,
            title: post.title,
            ua:JSON.stringify(window._ua)
        },
        success: function(data) {
            // console.log(data)
        },
        error: function(err) {
            // console.log(err)
        }
    });
}


