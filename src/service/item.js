import { $next, $node } from '@jx3box/jx3box-common/js/https';

// 获取物品
function get_item(item_id, params) {
    if (!item_id) return;
    return $node().get(`/item/id/${item_id}`, {
        params
    })
}

// 物品价格
function get_item_prices(item_id, params) {
    if (!item_id) return;
    return $next().get(`api/item-price/${item_id}/detail`, {
        params
    })
}

// 物品价格日志
function get_item_price_logs(item_id, params) {
    if (!item_id) return;
    return $next().get(`api/item-price/${item_id}/logs`, {
        params,
    });
}

// 物品区服价格日志
function get_item_servers_price_logs(item_id, params) {
    if (!item_id) return;
    return $next().get(`api/item-price/${item_id}/logs`, {
        params,
    });
}

export {
    get_item,
    get_item_prices,
    get_item_price_logs,
    get_item_servers_price_logs,
};
