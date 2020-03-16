import React, { Component } from 'react'
import styles from './index.css';
import { connect } from 'dva';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            err: {
                name: ''
            },
            passwordTypeFlag: true,
            passwordType: 'password'
        }
    }
    render() {
        return (
            <div className={styles.box} >
                <div className={styles.conWarp}>
                    <h1> 服务管理后台 </h1>
                    <div className={styles.warpIpt}>
                        <span className={styles.count}> </span>
                        <input type="text" placeholder='账号' className={styles.ipt}
                            onChange={e => this.onIptChange(e, 'name')} value={this.state.name}
                            onBlur={e => { this.vaildate('name') }} />

                    </div>
                    {this.state.err.name ? <p className={styles.help}>{this.state.err.name}</p> : ''}
                    <div className={styles.warpIpt}>
                        <span className={styles.key}> </span>
                        <input type={this.state.passwordType} placeholder='密码' className={styles.ipt}
                            onChange={e => this.onIptChange(e, 'password')} value={this.state.password} />
                        <span className={styles.keyEye} onClick={e => this.changeType(e)} > </span>
                    </div>
                    <button className={styles.login} onClick={this.onSubmit.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
    onIptChange(e, filed) {
        let value = e.target.value;
        this.setState({
            [filed]: value
        })
    }
    vaildate(filed) {
        let error = this.state.err
        if (filed === 'name') {
            this.state.name ? error.name = ' ' : error.name = '请输入名称'
        }
        this.setState({ err: error })
    }
    onSubmit() {
        let load = JSON.stringify({
            'username': this.state.name,
            'password': this.state.password,
        })
        this.props.dispatch({
            type: 'loginServer/login',
            history: this.props.history,
            payload: load,
        })
    }
    changeType() {
        let passwordType
        let passwordTypeFlag = this.state.passwordTypeFlag
        passwordTypeFlag ? passwordType = "text" : passwordType = "password"
        this.setState({
            passwordTypeFlag: !passwordTypeFlag,
            passwordType: passwordType
        })
    }
}
export default connect()(login)
