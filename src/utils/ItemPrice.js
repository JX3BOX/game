/**
 * ItemPrice
 * @param {*} Price 物品价格
 */

export default (Price) => {
    let zhuan = parseInt(Price / 100 / 100 / 10000);
    let jin = parseInt(Price / 100 / 100 % 10000);
    let yin = parseInt(Price / 100 % 100);
    let tong = parseInt(Price % 100);

    let output = '';
    if (zhuan) output += zhuan + '砖';
    if (jin) output += jin + '金';
    if (yin) output += yin + '银';
    output += tong + '铜';

    return output;
}

