import React from 'react';
import { PageHeader, Divider, Input, Button, Typography } from 'antd';
import { hex2Rgb, rgb2Hex } from '@/utils/index.ts';
import commonStyles from '@/assets/common.less';
import styles from './index.less';

const { Paragraph, Text } = Typography;

export default () => {
  let input: string = '';

  const handleConversion = () => {
    console.log(rgb2Hex(input));
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
          placeholder="输入十六进制 / RGB颜色值"
        />
        <Button type="primary" onClick={handleConversion}>
          转换
        </Button>
        <div className={styles.desc}>
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              Result:
            </Text>
          </Paragraph>
          <Paragraph>
            RGB <a>Thaw immediately</a>， 16 进制 <a>Apply Unlock</a>
          </Paragraph>
          <Paragraph style={{ background: 'transparent' }}>
            your color
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
