import React, { useState } from 'react';
import { PageHeader, Divider, Input, Button, Typography, message } from 'antd';

interface color {
  title: string;
  name: string;
  list: Array<string>;
}

interface colorItemProps {
  color: color;
}

const ColorItem = ({ color }: colorItemProps) => (
  <div>
    <div>{color.title}</div>
    {color.list.map((co, i) => (
      <div
        title="click to copy color"
        key={co}
        style={{
          color: i > 4 ? '#fff' : 'rgba(0, 0, 0, 0.85)',
          fontWeight: 'normal',
          background: co,
        }}
      >
        <span>{color.name}-1</span>
        <span>{co}</span>
      </div>
    ))}
  </div>
);

const colors = [
  {
    name: 'Lime',
    title: 'Lime ',
    list: ['#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911'],
  },
];

const test = {
  name: 'Lime',
  title: 'Lime ',
  list: ['#fcffe6', '#f4ffb8', '#eaff8f', '#d3f261', '#bae637', '#a0d911'],
};

const ColorMap: React.FC = () => {
  return (
    <div>
      <h3>常用颜色</h3>
      <ColorItem color={test} />
    </div>
  );
};

export default ColorMap;
