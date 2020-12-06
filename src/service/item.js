import {$http} from "./axios";

const {__helperUrl} = require("@jx3box/jx3box-common/js/jx3box.json");
const qs = require("qs");

function get_items_count() {
  return $http.get(`${__helperUrl}api/items/count`, {
    headers: {Accept: "application/prs.helper.v2+json"},
  });
}

// 获取物品
function get_item(item_id) {
  if (!item_id) return;
  return $http({
    url: `${__helperUrl}api/item/${item_id}`,
    headers: {Accept: "application/prs.helper.v2+json"},
    withCredentials: true,
  })
}

// 相关物品清单
function get_item_relation_plans(item_id, params) {
  if (!item_id) return;
  return $http({
    url: `${__helperUrl}api/item/${item_id}/relation_plans`,
    headers: {Accept: "application/prs.helper.v2+json"},
    withCredentials: true,
    params: params,
  })
}

function get_items(params) {
  return $http.get(`${__helperUrl}api/items`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    params: params,
  });
}

function get_items_search(params) {
  return $http.get(`${__helperUrl}api/item/search`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    params: params,
  });
}

function get_menu_items(params) {
  return $http.get(`${__helperUrl}api/item/menu_list`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    params: params,
  })
}

// 获取物品攻略列表
function get_item_posts() {
  return $http.get(`${__helperUrl}api/wiki/posts/newest`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    withCredentials: true,
    params: {type: 'item'},
  });
}

export {
  get_items_count,
  get_item,
  get_item_relation_plans,
  get_items,
  get_items_search,
  get_menu_items,
  get_item_posts
};
