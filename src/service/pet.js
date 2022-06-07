import { $helper,$node } from '@jx3box/jx3box-common/js/https';

function getPet(petid, params) {
    return $node().get(`/pet/${petid}`, {
        params
    });
}

// 获取宠物统计信息
function get_count() {
  return $helper().get(`api/pets/count`)
}

// 获取宠物列表
function get_list(params) {
  return $helper().get(`api/pets`, {
    params
  })
}

// 获取宠物明细
function get_pet(source_id) {
  return $helper().get(`api/pet/${source_id}`)
}

// 获取宠物类型列表
function get_type_list(params) {
  return $helper().get(`api/pet/types`, {
    params
  })
}

export {get_count, get_list, get_pet, get_type_list,getPet};
