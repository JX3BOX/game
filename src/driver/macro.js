import jquery from "jquery";
import { __Root, __OriginRoot } from "@jx3box/jx3box-common/data/jx3box.json";
const qs = require("qs");

const query = qs.parse(location.search, { ignoreQueryPrefix: true });
const rootPath = query.L === "classic_yq" ? __OriginRoot : __Root;
const name = decodeURIComponent(query.name);

jquery.ajax({
    async: true,
    url: "https://pull.j3cx.com/api/macro/query",
    type: "GET",
    data: { name: name },
    dataType: "json",
    success: function (data) {
        // alert(search)
        location.href = data.about;
    },
    error: function (err) {
        location.href = rootPath + "macro/";
    },
});
