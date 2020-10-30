/**
 * @file 内容展示
 * @author wond-z
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routeConfig from '../../routeConfig';
import Error from '../Error';

class ContentMain extends React.Component {
	/**
	 * 渲染路由
	 * @param  {String} path      路径
	 * @param  {String} name      名称
	 * @param  {String} icon      图标
	 * @param  {Function} component 组件
	 * @return {[type]}           渲染内容
	 */
	renderRouteItem = ({path, name, icon, component}) => {
		return (
			<Route exact key={path} path={path} component={component}/>
		)
	}

	/**
	 * 渲染子路由
	 * @param  {Array} children 子路由数组
	 * @return {[type]}          渲染内容
	 */
	renderSubRoute = ({children}) => {
		return (
			children && children.map(item => {
				return this.renderRouteItem(item)
			})
		)
	}

	render() {
		return (
			<Switch>
				{
					routeConfig.map(item => {
						return item.children && item.children.length > 0
						? this.renderSubRoute(item)
						: this.renderRouteItem(item)
					})
				}
				<Route path="*" component={ Error } />
				{/* <Redirect from="/*" to="/error" component={Error} /> */}
			</Switch>
		)
	}
}

export default ContentMain;
