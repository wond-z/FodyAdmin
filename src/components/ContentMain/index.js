import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Welcome from '../../pages/Welcome';
import UserManagement from '../../pages/UserManagement';

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
                    <Route exact path='/' component={Welcome}/>
					<Route path='/userManagement/management' component={UserManagement}/>
				</Switch>
			</div>
		)
	}
}

export default ContentMain
