/**
 * IconError 图标加载错误后展示链接
 *
 * @param {*} e event
 */
const {__imgPath} = require("@jx3box/jx3box-common/js/jx3box.json");

export default (e) => {
    e.target.src = __imgPath + "image/common/nullicon.png";
};
