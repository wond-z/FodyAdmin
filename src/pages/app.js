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
                <Layout>
                    <Header>
                        <Menus />
                    </Header>
                    <Layout>
                        <Sider>
                            <SideMenus />
                        </Sider>
                        <Content>
                            <ContentMain />
                        </Content>
                    </Layout>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Router>
        )
    }
};

export default App;
