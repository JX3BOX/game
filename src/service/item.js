import { $helper, $next } from '@jx3box/jx3box-common/js/https';

function get_items_count() {
    return $helper().get(`api/items/count`)
}

// 获取物品
function get_item(item_id) {
    if (!item_id) return;
    return $helper().get(`api/item/${item_id}`)
}

// 相关物品清单
function get_item_relation_plans(item_id, params) {
    if (!item_id) return;
    return $helper().get(`api/item/${item_id}/relation_plans`, {
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


function get_items(params) {
    return $helper().get(`api/items`, {
        params
    })
}

function get_items_search(params) {
    return $helper().get(`api/item/search`, {
        params
    })
}

function get_menu_items(params) {
    return $helper().get(`api/item/menu_list`, {
        params
    })
}

// 获取物品攻略列表
function get_item_posts() {
    return $helper().get(`api/wiki/posts/newest`, {
        params: { type: "item" },
    })
}

export {
    get_items_count,
    get_item,
    get_item_relation_plans,
    get_item_prices,
    get_item_price_logs,
    get_item_servers_price_logs,
    get_items,
    get_items_search,
    get_menu_items,
    get_item_posts,
};