import dict from '@jx3box/jx3box-dict/dict.json'

export default function (str){
    if(str.length){
        let arr = new Array(str.length)
        let i = -1
        for(let char of str){
            i = dict['zh-cn'].indexOf(char)
            i > -1 ? arr.push(dict['zh-tr'][i]) : arr.push(char)
        }
        return arr.join('')
    }else{
        return ''
    }
}