/**
 * 获取当前页面SourceType
 */
const URI = require("urijs");

export default () => {
  let query = URI(location.href).query(true);
  if (query) {
    if (query.type) {  // 请求参数最高优先级
      return query.type;
    } else if (query.id) { // 根据ID格式判断类型
      return query.id.split('_').length > 1 ? 'item' : 'achievement';
    }
  }
  return 'achievement';   // 默认类型
};
