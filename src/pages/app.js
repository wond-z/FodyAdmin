/**
 * @file app页面布局
 * @author wond-z
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Menus from '../components/Menus';
import SideMenus from '../components/SideMenus';
import ContentMain from '../components/ContentMain';
import './app.css';

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <SideMenus />
                    </Sider>
                    <Layout>
                        <Header>
                            <Menus />
                        </Header>
                        <Content style={{ padding: 24, minHeight: 360 }}>
                            <ContentMain />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>FodyAdmin ©2020 Created by Wond-Z</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
};

export default App;
