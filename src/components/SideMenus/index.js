/**
 * @file 侧栏菜单
 * @author wond-z
 */

import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import 'font-awesome/css/font-awesome.css';
import routeConfig from '../../routeConfig';

class SideMenus extends React.Component {
	constructor(props) {
		super(props);

		// 设置初始侧栏菜单状态
		this.state = {sideMenuConfig: this.getSideMenuConfig(routeConfig)};
	}

	/**
	 * 在第一次渲染后调用，只在客户端
	 */
	componentDidMount() {
		// console.log(this.props);

		// 监听路由变化
	    this.props.history.listen(() => {
			// 重新渲染
			this.setState({
				sideMenuConfig: this.getSideMenuConfig(routeConfig)
			});
	    })

	}

	/**
	 * 获取侧栏菜单路由配置
	 * @param  {Array} list 路由配置
	 * @return {Array}      侧栏路由配置
	 */
	getSideMenuConfig = (list) => {
		// 当前路由path
		let currentPath = this.props.history.location.pathname;
		for (let i = 0; i < list.length; i++ ) {
			if (list[i]['path'] === currentPath) {
				if (list[i]['children']) {
					return list[i]['children'];
				} else {
					// 以数组形式返回路由配置项
					return [list[i]];
				}
			} else {
				if (list[i]['children']) {
					for (let j = 0; i < list[i]['children'].length; j++ ) {
						if (list[i]['children'][j]['path'] === currentPath) {
							return list[i]['children'];
						}
					}
				}
			}
		}
	}

    handleClick = (e) => {
        // console.log('MenuList click: ', e);
    }

    renderMenuItem = ({path, name, icon}) => {
		return (
			<Menu.Item key={path}>
				<Link to={path}>
					{icon && <i className={'fa fa-' + icon}></i>} <span>{name}</span>
				</Link>
			</Menu.Item>
		)
	}

	render() {
		return (
            <Menu
                theme="dark"
                onClick={this.handleClick}
                // selectedKeys={[this.state.current]}
                defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
                mode="vertical"
            >
                {
					this.state.sideMenuConfig.map(item => {
						// return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
						return this.renderMenuItem(item);
					})
				}
            </Menu>
		)
	}
}
// 使用withRouter解决props返回为空
export default withRouter(SideMenus);
