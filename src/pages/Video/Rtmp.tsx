import React, { useState } from 'react';
import { PageHeader, Divider, Input, Button, message } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from './index.less';

// ocean rainbow 
// 湖南卫视：rtmp://58.200.131.2:1935/livetv/hunantv
// 广西卫视 rtmp://58.200.131.2:1935/livetv/gxtv
// 广东卫视 rtmp://58.200.131.2:1935/livetv/gdtv
// 香港财经 rtmp://202.69.69.180:443/webcast/bshdlive-pc

const ColorConversion: React.FC = () => {
  const codeString = `<div class="container">
  <video id="video" class="video-js vjs-default-skin videoStyle" data-setup="{}">
    <source src="rtmp://58.200.131.2:1935/livetv/hunantv" type="rtmp/flv" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a web browser that
      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
  </video>
</div>`;
  return (
    <div>
      <h3>RTMP</h3>
      <SyntaxHighlighter language="html" style={rainbow}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ColorConversion;
