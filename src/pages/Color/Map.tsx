import React from 'react';
import { colors } from '@/config/color';
import styles from './index.less';

interface color {
  title: string;
  name: string;
  list: Array<string>;
}

interface colorItemProps {
  color: color;
}

const ColorItem = ({ color }: colorItemProps) => (
  <div className={styles.colorItem}>
    <div className={styles.colorTitle}>{color.title}</div>
    {color.list.map((co, i) => (
      <div
        title="click to copy color"
        key={co}
        className={styles.color}
        style={{
          color: i > 4 ? '#fff' : 'rgba(0, 0, 0, 0.85)',
          fontWeight: 'normal',
          background: co,
        }}
      >
        <span>
          {color.name}-{i + 1}
        </span>
        <span>{co}</span>
      </div>
    ))}
  </div>
);

const ColorMap: React.FC = () => {
  return (
    <div className={styles.colorsMap}>
      {colors.map(color => (
        <ColorItem key={color.title} color={color} />
      ))}
      <p style={{ textAlign: 'center' }}>
        以上颜色资源来自{' '}
        <a target="_blank" href="https://ant.design/docs/spec/colors-cn">
          色彩-Ant Design
        </a>
        ，感谢！
      </p>
    </div>
  );
};

export default ColorMap;
