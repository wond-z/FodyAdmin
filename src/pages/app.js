import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menus from '../components/Menus';
import ContentMain from '../components/ContentMain'
// import Routes from './routes';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div className="nav">
                        <Menus />
                    </div>
                    <div>
                        <ContentMain />
                    </div>
                </Router>
            </div>
        )
    }
};

export default App;
