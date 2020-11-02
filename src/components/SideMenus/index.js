/**
 * @file 侧栏菜单
 * @author wond-z
 */

import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import routeConfig from '../../routeConfig';

class SideMenus extends React.Component {
	constructor(props) {
		super(props);
		console.log(this)
		// 设置初始侧栏菜单状态
		this.state = {sideMenuConfig: this.getSideMenuConfig(this.props.location.pathname)};
	}

	/**
	 * React新生命周期 - 从props中获取state
	 * @param  {Object} nextProps 现在的prop
	 * @param  {Object} prevState 重新渲染之前的state值
	 * @return {Array}           更新state值
	 */
	static getDerivedStateFromProps(nextProps, prevState) {
		const { sideMenuConfig } = nextProps;
	    // 当传入的sideMenuConfig发生变化的时候，更新state
	    if (sideMenuConfig !== prevState.sideMenuConfig) {
			// 初次渲染时从父页面带过来的sideMenuConfig为空，需要使用初值
			if (sideMenuConfig) {
				return {
		            sideMenuConfig,
		        };
			}
	    }
	    return prevState.sideMenuConfig;
	}

	/**
     * 获取侧栏菜单路由配置
     * @param  {String} currentPath 当前路由地址
     * @return {Array}      侧栏路由配置
     */
    getSideMenuConfig = (currentPath) => {
        // 当前路由path
        // let currentPath = this.props.history.location.pathname;
        let list = routeConfig;
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
                    for (let j = 0; j < list[i]['children'].length; j++ ) {
                        if (list[i]['children'][j]['path'] === currentPath) {
                            return list[i]['children'];
                        }
                    }
                }
            }
        }
        // 如果当前路由不存在，则返回
        return [];
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
