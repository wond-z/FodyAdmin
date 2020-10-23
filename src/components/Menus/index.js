import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const categories = ['首页','iOS','Python','ReactJs']
const menus = [
	{
        key: '/',
		title: '首页',
		icon: 'page'

	}, {
        key: '/iOS',
		title: 'iOS',
		icon: 'message'
	}
]

export default class Menus extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e) => {
        console.log('click ', e);
    }

    renderMenuItem = ({key, icon, title}) => {
		return (
			<Menu.Item key={key}>
				<Link to={key}>
					{icon && <SmileOutlined type={icon}/>}
					<span>{title}</span>
				</Link>
			</Menu.Item>
		)
	}

    render() {
        return (
            <div className="container">
                <div className="nav">
                    <Menu
                        onClick={this.handleClick}
                        // selectedKeys={[this.state.current]}
                        defaultSelectedKeys={['1']}
        				defaultOpenKeys={['sub1']}
                        mode="horizontal"
                        className="menucontainer"
                    >
                        {
        					menus.map(item => {
        						// return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
        						return this.renderMenuItem(item);
        					})
        				}
                    </Menu>
                </div>
                { this.props.children }
            </div>
        )
    }
}
