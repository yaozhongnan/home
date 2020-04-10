interface inputType {
  type: string;
}

export default {

  // RGB 转 十六进制  rgb: 255,255,255, return #ffffff
  rgb2Hex(rgb: string): string {
    const array = rgb.split(',').map(i => Number(i));

    let result = '#';

    for (let i = 0; i < array.length; i += 1) {
      const v = array[i];
      result += v.toString(16).padStart(2, '0');
    }

    return result;
  },

  // 十六进制 转 RGB  hex: #aaa or #ffffff, return rgb(255,255,255)
  hex2Rgb(hex: string): string {
    // 统一去掉 #
    hex = hex.substring(1);

    let result: Array<number> = [];
    let final: string = '';

    // 如果是三位，需要转六位
    if (hex.length === 3) {
      for (let i = 0; i < hex.length; i += 1) {
        const v = hex[i];
        final += v.repeat(2);
      }
    }

    if (hex.length === 6) final = hex;

    for (let i = 0; i < final.length; i += 2) {
      const decimal = parseInt(final.substr(i, 2), 16);
      result.push(decimal);
    }

    return `rgb(${result.join(',')})`;
  },

  // 检查 input 是否属于 16 进制或 Rgb 颜色值
  check(input: string): inputType {
    const rgb = /(^[1-2]{1}[0-4]{1}[0-9]{1}$)|(^[1-2]{1}[5]{1}[0-5]{1}$)|(^[1-9]{1}[0-9]{1}$)|(^[0-9]{1}$)/;
    const hex = /(^[#][0-9A-Fa-f]{3}$)|(^[#][0-9A-Fa-f]{6}$)/;

    if (hex.test(input)) return { type: 'hex' };

    if (!input.split(',').find(i => !rgb.test(i.toString()))) {
      return { type: 'rgb' };
    }

    return { type: '' };
  },
};
