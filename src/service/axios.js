import axios from "axios";

const $http = axios.create({
    withCredentials: true,
});

export { $http };
