import { $node } from '@jx3box/jx3box-common/js/https'

const getBossInfo = (id) => {
    return $node().get(`/npc/id/${id}`)
}

export {
    getBossInfo
}
