/**
 * 简单的日期格式化
 *
 * @param {*} timestamp Date实例
 * @param {object} opt polished:是否补齐两位,separator:连接分隔符
 */
export default (timestamp, opt = {polished: true, separator: '-'}) => {
    let dt = new Date(parseInt(timestamp) * 1000);
    let year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    let date = dt.getDate();
    let str = opt.polished ?
        `${year}${opt.separator}${polish(month)}${opt.separator}${polish(date)}` :
        `${year}${opt.separator}${month}${opt.separator}${date}`;
    return str;

    function polish(val) {
        return val < 10 ? ('0' + val) : val
    }
}

