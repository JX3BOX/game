import { $http } from "./axios";
import { __helperUrl } from "@jx3box/jx3box-common/data/jx3box.json";

// 获取宠物统计信息
function get_count() {
  return $http.get(`${__helperUrl}api/pets/count`, {
    headers: {Accept: "application/prs.helper.v2+json"},
  });
}

// 获取宠物列表
function get_list(params) {
  return $http.get(`${__helperUrl}api/pets`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    params: params,
  });
}

// 获取宠物明细
function get_pet(source_id) {
  return $http.get(`${__helperUrl}api/pet/${source_id}`, {
    headers: {Accept: "application/prs.helper.v2+json"},
  });
}

// 获取宠物类型列表
function get_type_list(params) {
  return $http.get(`${__helperUrl}api/pet/types`, {
    headers: {Accept: "application/prs.helper.v2+json"},
    params: params,
  });
}

export {get_count, get_list, get_pet, get_type_list};
