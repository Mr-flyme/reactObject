import React, { Component } from 'react'
import { BrowserRouter as  Link } from "react-router-dom";
import login from './login'

export default class index extends Component {
    render() {
        return (
            <div>
                    <ul className='navbar columns'>
                        <li className='column'><Link to="/login">login</Link></li>
                        {/* <li className='column'><Link to="/count">count</Link></li> */}
                    </ul>

                    <div>
                        {/* <Route path='/login' component={login} /> */}
                        {/* <Route path='/count' component={count} /> */}

                    </div>
            </div>
        )
    }
}
