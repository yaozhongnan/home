// RGB 转 十六进制  rgb: 255,255,255
export const rgb2Hex = (rgb: string): string => {
  const reg = /[1-2]{1}[0-5]{1}[0-5]{1}|[1-9]{1}[0-9]{1}|[0-9]{1}/;

  console.log(reg.test(rgb));

  return '';
};

// 十六进制 转 RGB  hex: aaa or ffffff
export const hex2Rgb = (hex: string): string => {
  const reg = /(^[0-9A-Fa-f]{3}$)|(^[0-9A-Fa-f]{6}$)/;

  // 校验参数合法性
  if (!reg.test(hex)) {
    return 'invalid params';
  }

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
};
