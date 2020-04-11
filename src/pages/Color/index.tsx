import React, { useState } from 'react';
import { PageHeader, Divider, Input, Button, message } from 'antd';
import Result from './Result';
import ColorMap from './Map';
import colorUtil from '@/utils/color';
import commonStyles from '@/assets/common.less';

const ColorConversion: React.FC = () => {
  let input: string = '';

  const [rgb, setRgb] = useState('');
  const [hex, setHex] = useState('');

  const handleConversion = () => {
    const { type } = colorUtil.check(input);
    if (!type) message.error('Invalid parameter');
    if (type === 'rgb') {
      setHex(colorUtil.rgb2Hex(input));
      setRgb(input);
    }
    if (type === 'hex') {
      setHex(input);
      setRgb(colorUtil.hex2Rgb(input));
    }
  };

  return (
    <div className={commonStyles.wrapper}>
      <div>
        <PageHeader
          style={{ padding: 0 }}
          backIcon={false}
          title="在线颜色转换工具"
        />
        <Divider />
        <Input
          style={{ marginBottom: 24 }}
          onChange={e => (input = e.target.value)}
          placeholder="输入十六进制 / RGB 颜色值。例：#FAFAFA / #FFF / 255,255,0"
        />
        <Button type="primary" onClick={handleConversion}>
          转换
        </Button>
        <Result hex={hex} rgb={rgb} />
        <ColorMap />
      </div>
    </div>
  );
};

export default ColorConversion;
