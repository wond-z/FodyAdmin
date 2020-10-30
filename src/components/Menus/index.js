import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import routeConfig from '../../routeConfig';

export default class Menus extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        console.log('Menu click: ', e);
        this.props.submenu(this.getSideMenuConfig(e.key));
    }

    /**
     * 获取侧栏菜单路由配置
     * @param  {Array} list 路由配置
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
                onClick={this.handleClick}
                // selectedKeys={[this.state.current]}
                defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
                mode="horizontal"
                className="menucontainer"
                theme="dark"
            >
                {
					routeConfig.map(item => {
                        // if (item.children) {
                            return (
                                <Menu.Item key={item.path}>
                    				{item.icon && <i className={'fa fa-' + item.icon}></i>} <span>{item.name}</span>
                    			</Menu.Item>
                            )
                        // } else {
                        //     // return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
    					// 	return this.renderMenuItem(item);
                        // }
					})
				}
            </Menu>
        )
    }
}
