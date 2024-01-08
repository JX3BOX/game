import xfid from "@jx3box/jx3box-data/data/xf/xfid.json";
import { __Root, __OriginRoot } from "@jx3box/jx3box-common/data/jx3box.json";

const qs = require("qs");

const query = qs.parse(location.search, { ignoreQueryPrefix: true });
const rootPath = query.L === "classic_yq" ? __OriginRoot : __Root;
// "10144": "问水诀",
// "10145": "山居剑意",
const id = query.kungfu == "10145" ? "10144" : query.kungfu;
const xf = xfid[id];

location.href = rootPath + "macro/?subtype=" + xf; //+ '#/rank'
