import React, { Component, Fragment } from 'react'
import styles from './list.css';
import { connect } from 'dva';

class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: {

            }
        }
    }
    componentDidMount() {
        this.getInfo();
    }
    render() {
        let books = this.props.list;
        return (
            <Fragment>
                <div>
                    <ul className={styles.iptul}>
                        <li>
                            <label>场景</label>
                            <input type="text" className={styles.ipt} />
                        </li>
                        <li>
                            <label>服务包</label>
                            <input type="text" className={styles.ipt} />
                        </li>
                        <li>
                            <label>主导部门</label>
                            <input type="text" className={styles.ipt} />
                        </li>
                    </ul>
                    <ul className={styles.iptul}>
                        <li>
                            <label>场景</label>
                            <input type="text" className={styles.ipt} />
                        </li>
                        <li>
                            <label>场景</label>
                            <input type="text" className={styles.ipt} />
                        </li>
                        <li className={styles.btnli}>
                            <button className={`${styles.btnblue}`}>查询</button>
                            <button className={`${styles.btn}`}>重置</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>功能名称</th>
                                <th>场景</th>
                                <th>服务包</th>
                                <th>计划完成时间</th>
                                <th>负责人</th>
                                <th>主导部门</th>
                                <th>状态</th>
                                <th>时间</th>
                            </tr>
                        </thead>
                        {books.map((book, i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td>{book.funName}</td>
                                        <td>{book.inver}</td>
                                        <td>{book.serve}</td>
                                        <td>{book.finTime}</td>
                                        <td>{book.user}</td>
                                        <td>{book.department}</td>
                                        <td>
                                            <select className={styles.sel} value={books.state}
                                                onChange={(e) => this.getValue(e, i)}>
                                                <option value="1">已完成</option>
                                                <option value="2">待定</option>
                                                <option value="3">未完成</option>
                                            </select>
                                        </td>
                                        <td>{book.action}</td>
                                    </tr>
                                </tbody>)
                        })}
                    </table>
                </div>
            </Fragment>
        )
    }
    getValue(e, i) {
        let { list } = this.props;
        list[i]['state'] = e.target.value
        this.props.dispatch({
            type: 'loginServer/save',
            payload: {
                listState: list
            }
        })
    }
    getInfo() {
        this.props.dispatch({
            type: 'loginServer/getList',
            history: this.props.history,
        })
    }

}
function mapStateToProps(state) {
    return {
        list: state.loginServer.listState
    }
}
export default connect(mapStateToProps)(list);