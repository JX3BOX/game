import xfid from '@jx3box/jx3box-data/data/xf/xfid.json'
let search = location.search.slice(1).split('=')[1]
let xf = xfid[search]
location.href='https://v2.jx3box.com/macro/?subtype=' + xf