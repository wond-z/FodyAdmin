/**
 * @file app页面布局
 * @author wond-z
 */

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Menus from '../components/Menus';
import SideMenus from '../components/SideMenus';
import ContentMain from '../components/ContentMain';
import 'font-awesome/css/font-awesome.css';
import './app.css';

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
    constructor(){
        super();
        this.state = {
            sideMenuConfig: ''
        }
    }

    getSubMenuConfig(list) {
        this.setState({
            sideMenuConfig: list
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Header>
                        <div className="logo" />
                        <div className="tools">登录</div>
                        <Menus submenu={this.getSubMenuConfig.bind(this)} />
                    </Header>
                    <Layout>
                        <Sider>
                            <SideMenus sideMenuConfig={this.state.sideMenuConfig} />
                        </Sider>
                        <Layout className="layout-main">
                            <Content className="layout-content">
                                <ContentMain />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>FodyAdmin ©2020 Created by Wond-Z</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }
};

export default App;
