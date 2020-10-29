/**
 * @file app页面布局
 * @author wond-z
 */

import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import { Button } from 'antd';

class Error extends Component {
    render() {
        return (
            <div className="error">
                <p className="remind">您访问的页面不存在，请返回主页！</p>
                <Link to="/">
                    <Button className="button" type="primary" ghost>返回主页</Button>
                </Link>
            </div>
        )
    }
};

export default Error;
