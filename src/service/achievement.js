import { $cms, $node } from "@jx3box/jx3box-common/js/https";

function get_relation_achievements(source_id) {
    if (!source_id) return null;
    return $node().get(`/api/node/achievement/${source_id}/relations`, {
        params: {
            client,
        },
    });
}
// 获取成就公告
function getBreadcrumb(key = "wiki_cj_ac") {
    return $cms()
        .get(`/api/cms/breadcrumb/${key}`)
        .then((res) => {
            return res.data.data.html || "";
        });
}

export { get_relation_achievements, getBreadcrumb };
