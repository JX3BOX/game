// import { __spider } from "@jx3box/jx3box-common/js/jx3box.json";
import { $next } from "@jx3box/jx3box-common/js/axios";
import axios from "axios";

let __spider = 'http://localhost:3002/'
function getFlower(params) {
    return axios.get(__spider + "flower", {
        params: params,
    });
}

function getFlowerDetail(params) {
    return $next.get("api/flower/price/group-by-map", {
        params: params,
    })
}

export { getFlower, getFlowerDetail };
