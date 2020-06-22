import jquery from "jquery";
let search = location.search.slice(1).split("=")[1];
search = decodeURIComponent(search)
jquery.ajax({
    async: true,
    url: "https://pull.j3cx.com/api/macro/query",
    type: "GET",
    data: { name: search },
    dataType: "json",
    success: function(data) {
        console.log(data)
        // location.href = data.about;
    },
    error: function(err) {
        // location.href = "https://www.jx3box.com/macro/";
        console.log(err)
    },
});
