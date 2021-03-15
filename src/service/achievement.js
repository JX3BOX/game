import { $http } from "./axios";
import { __helperUrl } from "@jx3box/jx3box-common/data/jx3box.json";

// 获取成就统计信息
function get_total_count() {
    return $http({
        method: "GET",
        url: `${__helperUrl}api/achievements/count`,
        headers: { Accept: "application/prs.helper.v2+json" },
    });
}

// 获取成就列表
function get_achievements(params) {
    return $http({
        method: "GET",
        url: `${__helperUrl}api/achievements`,
        headers: { Accept: "application/prs.helper.v2+json" },
        params: params,
    });
}

function get_relation_achievements(source_id) {
    if (!source_id) return null;
    return $http({
        method: "GET",
        url: `${__helperUrl}api/achievement/${source_id}/relations`,
        headers: { Accept: "application/prs.helper.v2+json" },
    });
}

export { get_total_count, get_achievements, get_relation_achievements };
