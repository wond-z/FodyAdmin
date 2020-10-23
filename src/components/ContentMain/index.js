import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddUser from '../../pages/AddUser';
import Detail from '../../pages/Detail';

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
                    <Route exact path='/' component={AddUser}/>
                    <Route path='/iOS/' component={Detail}/>
				</Switch>
			</div>
		)
	}
}

export default ContentMain
