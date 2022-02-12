import { $helper } from '@jx3box/jx3box-common/js/https'

// 获取成就统计信息
function get_total_count() {
    return $helper().get(`api/achievements/count`)
}

// 获取成就列表
function get_achievements(params) {
    return $helper().get(`api/achievements`, {
        params
    })
}

function get_relation_achievements(source_id) {
    if (!source_id) return null;
    return $helper().get(`api/achievement/${source_id}/relations`)
}

export { get_total_count, get_achievements, get_relation_achievements };
