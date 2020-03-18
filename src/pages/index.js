import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class index extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/list">lists</Link></li>
                    <li><Link to="/inputs">inputs</Link></li>
                </ul>
            </div>
        )
    }
}
