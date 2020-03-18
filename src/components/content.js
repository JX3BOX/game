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

                //初始化内容
                // $('#stars').html(Math.min(Math.max(1,parseInt(val)),5)) 
                // $('#level').val(query.player)
                $('#updatetime').html(post.updated)
                $('#content').html(content)
                $('#author').val(query.player)

                //繁简切换
                setupTranslator(content)

                //编辑
                setupEditor(post)

                //检查图片加载
                $('#content img').length && Utils.checkImageLoad($('#content img'))

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
function setupEditor(){

    var isLocked = false
    
    bindEditEvent()

    bindCancelEvent(isLocked)

    bindSubmitEvent(isLocked)

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

function bindCancelEvent(isLocked){
    $('#cancel').on('click',function (){
        if(isLocked) return 
        resetEditor()
    })
}

function bindSubmitEvent(isLocked){
    var isChanged = false
    // var hash_old = $('#content').html().hashCode()

    //检查
    $('#content').one('input',function (){
        isChanged = true
    })

    //提交
    $('#submit').on('click',function (){

        //防止重复提交
        if(isLocked) return 

        //确认有修改
        if(!isChanged) {
            // alert('没有任何改动,请勿滥提交')
            return
        }

        //校验内容HASH,太影响性能,改由服务端判定
        // var hash_new = $('#content').html().hashCode()
        // if(hash_new == hash_old){
        //     alert('没有任何改动,请勿滥提交')
        //     return
        // }

        isLocked = true
        $('#submit,#cancel').addClass('disabled')
        // TODO:提交数据至接口

            //发布成功
            //resetEditor()
            // isLocked = false
        

        //发布失败
            // alert('提交成功,请等待审核')
            // isLocked = false
    })
}

function resetEditor(){
    $('#edit').removeClass('on')
    $('#submit,#cancel').removeClass('disabled')
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


