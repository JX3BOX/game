import xfid from '@jx3box/jx3box-data/data/xf/xfid.json'
const qs = require('qs');
let search = qs.parse(location.search,{ ignoreQueryPrefix: true }).kungfu
let xf = xfid[search]
location.href='https://v2.jx3box.com/macro/?subtype=' + xf //+ '#/rank'
// TODO:跳转至排行榜