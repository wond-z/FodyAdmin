import React, { Component } from 'react';
import Menus from '../Menus'
import './index.css';

const logo = require('./logo.svg');

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="nav"><Menus history={this.props.history} /></div>
                </div>
                <div className="header">
                    <span className="log">
                        <img src={logo} alt="logo" />
                    </span>
                    <h1>Wond-Z's Blog</h1>
                    <p>If you can't measure it, you can't improve it</p>
                </div>
            </div>
        )
    }
}
