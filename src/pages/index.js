import React, { useState } from 'react';
import Link from 'umi/link';
import { Button } from 'antd'
import styles from './index.css';

export default function() {

  const [count, setCount] = useState(0)

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <p>{count}</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>增加</Button>
      <Button type="primary" onClick={() => setCount(count - 1)}>减少</Button>
      <Button>
        <Link to="./help">跳转</Link>
      </Button>
    </div>
  );
}
