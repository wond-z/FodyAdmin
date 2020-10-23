import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menus from '../../components/Menus';
import AddUser from '../AddUser';
import Detail from '../Detail';
import './index.css';
// import Routes from './routes';

class Home extends Component {
    render() {
        return (
            <Router>
                <Menus>
                    <Route exact path='/' component={AddUser}/>
                    <Route path='/iOS/' component={Detail}/>
                </Menus>
            </Router>
        )
    }
};

export default Home;
