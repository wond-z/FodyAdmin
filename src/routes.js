import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './containers/App';
import Detail from './containers/Detail';
// import NotFound from '../NotFound';
import { BackTop } from 'antd'

class Routes extends Component {
    constructor(props){
        super(props);
    }

    render() {
        // const {url} = this.props.match;
        // const {url} = this.props.location.pathname;
        // console.log(this);
        return(
            <div>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={App}/>
                            <Route path='/iOS/' component={Detail}/>
                        </Switch>
                    </Router>
                </div>
                <BackTop />
            </div>
        )
    }
}

export default Routes;
