/**
 * 玩家名称
 */
const URI = require("urijs");
export default () => {
    let query = URI(location.href).query(true);
    return query.player || '匿名';
}
