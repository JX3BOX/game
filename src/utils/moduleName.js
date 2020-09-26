/**
 * 模块名称
 */
export default (module) => {
    switch (module) {
        case 'achievement':
            return '成就';
        case 'item':
            return '物品';
        default:
            return '';
    }
}

