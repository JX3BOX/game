import { __spider, __next } from "@jx3box/jx3box-common/data/jx3box.json";
import { $https } from "@jx3box/jx3box-common/js/https";
import axios from "axios";

// let __spider = 'http://localhost:3002/'
function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerDetail(params) {
    return $https("next", {
        interceptor: "next",
    }).get("/api/flower/price/group-by-map", {
        params: params,
    });
}

export { getFlower, getFlowerDetail };
