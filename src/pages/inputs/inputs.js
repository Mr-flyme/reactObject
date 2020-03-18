import React, { Component } from 'react'
import styles from "./inputs.css"
import { connect } from 'dva';
// import { provinces, cities, counties } from './provinceData'

class inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceIndex: "0",
            cityIndex: "0",
            countyIndex: "0",
            ioc: false,
            app: false,
            xcx: false
        }
    }
    provinceChange(e) {
        this.setState({
            provinceIndex: e.target.value,
            cityIndex: "0",
            countyIndex: "0"
        })
    }
    cityChange(e) {
        let { provinceIndex, cityIndex } = this.state;
        provinceIndex > cityIndex ? cityIndex = 0 : cityIndex = e.target.value
        this.setState({
            cityIndex: cityIndex,
            countyIndex: "0"
        })
    }
    selectChange(e, value) {
        this.setState({
            [value]: e.target.checked,
        })
    }
    getLocat() {
        this.props.dispatch({
            type: 'loginServer/getLocat',
            history: this.props.history,
        })
    }
    componentDidMount() {
        this.getLocat();
        console.log(this.props.history.location.query.id)
    }
    render() {
        let { provinces, cities, counties } = this.props.locats;
        let { provinceIndex, cityIndex } = this.state;
        if (provinceIndex > cityIndex) cityIndex = 0
        console.log(this.refs)
        return (
            <div>
                <ul className={styles.iptul}>
                    <li>
                        <label>
                            <span style={{ color: "red", }}>*</span> 省
                            <span className={styles.info}></span>
                        </label>

                        <select className={styles.ipt} value={provinceIndex} onChange={e => { this.provinceChange(e) }}>
                            {
                                provinces.map((p, index) => {
                                    return (
                                        <option value={index} key={`province${index}`}>{p}</option>
                                    )
                                })
                            }
                        </select>
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 市
                            <span className={styles.info}></span>
                        </label>
                        <select className={styles.ipt} value={cityIndex} onChange={e => { this.cityChange(e) }}>
                            {
                                cities[provinceIndex] && cities[provinceIndex].map((p, index) => {
                                    return (
                                        <option value={index} key={`city${index}`}>{p}</option>
                                    )
                                })
                            }
                        </select>
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 区
                            <span className={styles.info}></span>
                        </label>
                        <select className={styles.ipt}>
                            {counties[provinceIndex] && counties[provinceIndex][cityIndex] && counties[provinceIndex][cityIndex].map((p, index) => {
                                return (
                                    <option value={p} key={`county${index}`}>{p}</option>
                                )
                            })
                            }
                        </select>
                    </li>
                </ul>
                <ul className={styles.iptul}>
                    <li>
                        <label>
                            <span style={{ color: "red", }}>*</span> 状态
                            <span className={styles.info}></span>
                        </label>

                        <input type="text" className={styles.ipt} />
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 业务类型
                            <span className={styles.info}></span>
                        </label>
                        <input type="text" className={styles.ipt} />
                    </li>
                    <li>

                        <label>
                            <span style={{ color: "red" }}>*</span> 业务类型
                            <span className={styles.info}></span>
                        </label>
                        <div className={styles.checkboxList} onChange={(e) => { this.selectChange(e, 'ioc') }}>
                            <input type="checkbox" id="ioc" />
                            <label htmlFor='ioc'>IOC </label>
                        </div>
                        <div className={styles.checkboxList} onChange={(e) => { this.selectChange(e, 'app') }}>
                            <input type="checkbox" id="app" />
                            <label htmlFor='app'>App </label>
                        </div>
                        <div className={styles.checkboxList} onChange={(e) => { this.selectChange(e, 'xcx') }}>
                            <input type="checkbox" id="xcx" />
                            <label htmlFor='xcx'>小程序 </label>
                        </div>
                    </li>
                </ul>
                <ul className={styles.iptul}>
                    <li>
                        <label>
                            <span style={{ color: "red", }}>*</span> 场景
                            <span className={styles.info}></span>
                        </label>

                        <input type="text" className={styles.ipt} />
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 服务包
                            <span className={styles.info}></span>
                        </label>
                        <input type="text" className={styles.ipt} />
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 主导部门
                            <span className={styles.info}></span>
                        </label>
                        <input type="text" className={styles.ipt} />
                    </li>
                </ul>
                <ul className={styles.iptul}>
                    <li>
                        <label>
                            <span style={{ color: "red", }}>*</span> 场景
                            <span className={styles.info}></span>
                        </label>

                        <input type="text" className={styles.ipt} />
                    </li>
                    <li>
                        <label>
                            <span style={{ color: "red" }}>*</span> 服务包
                            <span className={styles.info}></span>
                        </label>
                        <input type="text" className={styles.ipt} />
                    </li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        locats: state.loginServer.locats
    }
}
export default connect(mapStateToProps)(inputs)
