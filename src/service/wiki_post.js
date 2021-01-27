import {$http} from "./axios";

const {__helperUrl} = require("@jx3box/jx3box-common/js/jx3box.json");
const qs = require("qs");

// 获取百科最新攻略
function get_wiki_newest_post(source_type, source_id, supply = 1) {
    return $http.get(`${__helperUrl}api/wiki/post`, {
        headers: {Accept: "application/prs.helper.v2+json"},
        params: {type: source_type, source_id: source_id, supply: supply}
    });
}

// 获取百科攻略
function get_wiki_post(post_id) {
    return $http.get(`${__helperUrl}api/wiki/post/${post_id}`, {
        headers: {Accept: "application/prs.helper.v2+json"},
    });
}

export {get_wiki_newest_post, get_wiki_post};
