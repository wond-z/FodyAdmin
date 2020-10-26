import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
// import { SmileOutlined } from '@ant-design/icons';
// import { createFromIconfontCN } from '@ant-design/icons';
import faStyles from 'font-awesome/css/font-awesome.css';
import 'antd/dist/antd.css';

const menus = [
	{
        key: '/',
		title: '添加角色',
		icon: 'plus-square-o'

	}, {
        key: '/iOS',
		title: '删除角色',
		icon: 'minus-square-o'
	}
];

// 使用createFromIconfontCN方式引入（依赖网络环境）
// const IconFont = createFromIconfontCN({
// 	// 通过iconfont.cn生成
// 	scriptUrl: '//at.alicdn.com/t/font_2158544_70d674n5yjq.js',
// });

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
					{/* {icon && <SmileOutlined type={icon}/>} */}
					{icon && <i class={'fa fa-' + icon}></i>} <span>{title}</span>
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
            >
                {
					menus.map(item => {
						// return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
						return this.renderMenuItem(item);
					})
				}
            </Menu>
        )
    }
}
