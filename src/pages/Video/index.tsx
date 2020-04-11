import React, { useState } from 'react';
import { PageHeader, Divider, Input, Button, message } from 'antd';
import Rtmp from './Rtmp';
import commonStyles from '@/assets/common.less';

const ColorConversion: React.FC = () => {
  return (
    <div className={commonStyles.wrapper}>
      <div>
        <PageHeader
          style={{ padding: 0 }}
          backIcon={false}
          title="H5 播放 RTSP/RTMP 流媒体协议的视频"
        />
        <Divider />
        <Rtmp />
      </div>
    </div>
  );
};

export default ColorConversion;
