import jquery from "jquery";
const qs = require('qs');
let search = qs.parse(location.search,{ ignoreQueryPrefix: true }).name
search = decodeURIComponent(search)
jquery.ajax({
    async: true,
    url: "https://pull.j3cx.com/api/macro/query",
    type: "GET",
    data: { name: search },
    dataType: "json",
    success: function(data) {
        alert(search)
        location.href = data.about;
    },
    error: function(err) {
        location.href = "https://www.jx3box.com/macro/";
    },
});
