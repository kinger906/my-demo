import React, { useEffect, useRef } from 'react';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1>主题：xx</h1>
      <h3>简介：xx</h3>
      <div className={styles.list}>
        <div className={styles.module}>
          <h4>demo1：xx</h4>
          <div className={styles.demo}></div>
        </div>

        <div className={styles.module}>
          <h4>demo2：xx</h4>
          <div className={styles.demo}></div>
        </div>
      </div>
    </div>
  );
}
