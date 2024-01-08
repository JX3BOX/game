import { $node } from "@jx3box/jx3box-common/js/https";

function getPet(petid, params) {
    return $node().get(`/pet/${petid}`, {
        params,
    });
}

export { getPet };
