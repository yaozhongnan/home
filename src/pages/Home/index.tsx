import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';
import styles from './index.less';

const title: string = '虽多尘色染，犹见墨痕浓。';
const logo: string = '/logo.png';
const letterSpacing: string = '10px';

const enter = (): void => {
  history.push('/');
};

const Logo: React.FC = () => (
  <div className={styles.logo} style={{ width: 350 }}>
    <img src={logo} />
  </div>
);

const Content: React.FC = () => (
  <div className={styles.content} style={{ letterSpacing }}>
    {title}
  </div>
);

const Home: React.FC = () => {
  document.oncontextmenu = e => {
    e.preventDefault();
  };

  document.onkeydown = e => {
    if (e.keyCode == 13) {
      enter();
    }
  };

  return (
    <div className={styles.contaner}>
      <div className={styles.main}>
        <Logo />
        <Content />
        <Button
          onClick={() => enter()}
          className={styles.btn}
          ghost
          size="large"
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default Home;
