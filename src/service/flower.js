import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
import axios from "axios";
import { $next } from "@jx3box/jx3box-common/js/https";

// let __spider = 'http://localhost:3002/'
function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerDetail(params) {
    return $next().get("/api/flower/price/group-by-map", {
        params: params,
    });
}

export { getFlower, getFlowerDetail };
