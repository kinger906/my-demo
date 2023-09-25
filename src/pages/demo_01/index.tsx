import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from './index.less';

export default function IndexPage() {
  const domRef = useRef<any>();
  const domRef2 = useRef<any>();

  const renderDemo1 = () => {
    lottie.loadAnimation({
      // 加载动画的容器
      container: domRef.current,
      // 动画渲染器
      renderer: 'svg',
      // 动画循环
      loop: true,
      // 动画路径
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json',
    });
  };

  const renderDemo2 = () => {
    const lottleObj = lottie.loadAnimation({
      container: domRef2.current,
      renderer: 'svg',
      loop: true,
      autoplay: false, // 禁止自动播放
      path: 'https://mpr.cdn.meijingdata.com/aurora-smart-mapp/assets/lottie-air/1_1.json',
    });
    lottleObj.addEventListener('DOMLoaded', () => {
      lottleObj.play();
      // 随机修改svg的内容，svg有预留id更好
      setInterval(() => {
        domRef2.current
          .querySelector('svg')
          .setAttribute(
            'viewBox',
            `0 0 ${Math.random() * 1000} ${Math.random() * 1000}`,
          );
      }, 2000);
    });
  };

  useEffect(() => {
    renderDemo1();
    renderDemo2();
  }, []);

  return (
    <div className={styles.container}>
      <h1>主题：Lottie动画</h1>
      <h3>
        简介：Lottie一个适用于Web，Android，iOS，React Native和Windows
        的移动库，它可以使用Bodymovin解析以json格式导出的Adobe After
        Effects动画，并在移动设备上进行本地渲染！
      </h3>
      <div className={styles.list}>
        <div className={styles.module}>
          <h4>demo1：加载普通json动画</h4>
          <div className={styles.demo} ref={domRef}></div>
        </div>

        <div className={styles.module}>
          <h4>demo2：加载json动画，可修改动画里元素的内容</h4>
          <div className={styles.demo} ref={domRef2}></div>
        </div>
      </div>
    </div>
  );
}
