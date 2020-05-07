import dict from '../assets/data/dict'

export default function (str){
    if(str.length){
        let arr = new Array(str.length)
        let i = -1
        for(let char of str){
            i = dict['cn'].indexOf(char)
            i > -1 ? arr.push(dict['tw'][i]) : arr.push(char)
        }
        return arr.join('')
    }else{
        return ''
    }
}