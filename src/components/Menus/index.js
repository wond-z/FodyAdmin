import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import routeConfig from '../../routeConfig';

console.log(routeConfig);

export default class Menus extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        // console.log('Menu click: ', e);
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
						// return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
						return this.renderMenuItem(item);
					})
				}
            </Menu>
        )
    }
}
