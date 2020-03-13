import styles from './index.css';
import { Fragment } from 'react';

export default function () {
    return (
        <Fragment >
            <div className={styles.box} >
                <div className={styles.conWarp}>
                    <p> 服务管理后台 </p>
                    <div className={`${styles.warpIpt}`}>
                        <span className={`${styles.count} `}> </span>
                        <input type="text" placeholder='账号' className={`${styles.ipt1} `} />

                    </div>
                    <div className={`${styles.warpIpt}`}>
                        <span className={`${styles.key}`}> </span>
                        <input type="text" placeholder='密码' className={`${styles.ipt2} `} />
                        <span className={`${styles.keyEye}`}> </span>
                    </div>
                    <button className={styles.login} >登录</button>
                </div>


            </div>
        </Fragment>
    );
}