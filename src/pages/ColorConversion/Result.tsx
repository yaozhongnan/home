import React from 'react';
import { Typography } from 'antd';
import styles from './index.less';

const { Paragraph, Text } = Typography;

interface resultProps {
  hex: string;
  rgb: string;
}

const Result = (props: resultProps) => (
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
      RGB：<a>{props.rgb}</a>
    </Paragraph>
    <Paragraph>
      十六进制：<a>{props.hex}</a>
    </Paragraph>
    <Paragraph style={{ backgroundColor: props.hex }}>your color</Paragraph>
  </div>
);

export default Result;
