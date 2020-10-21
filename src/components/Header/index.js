import React, { Component } from 'react';
import './index.css';
const logo = require('./logo.svg');

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span className="log">
                    <img src={logo} alt="logo" />
                </span>
                <h1>Wond-Z's Blog</h1>
                <p>If you can't measure it, you can't improve it</p>
            </div>
        )

    }
}
