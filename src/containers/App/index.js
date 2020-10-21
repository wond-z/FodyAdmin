import React, { Component } from 'react';
// import style from './App.css';
import './index.css';
import Header from '../../components/Header'
import Menus from '../../components/Menus'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="nav"><Menus /></div>
            </div>
        )
    }
};

export default Home;
