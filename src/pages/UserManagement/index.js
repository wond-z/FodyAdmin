import React, {Component} from 'react';
import {
    Table,
    Tag,
    Space,
    Modal,
    Button,
    Form,
    Input,
    InputNumber
} from 'antd';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }
];

const layout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 17
    }
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}'
    }
};

export default class UserManagement extends Component {
    state = {
        visible: false
    };

    // 展示模态框
    showModal = () => {
        this.setState({visible: true});
    };

    // 点击确定
    handleOk = (e) => {
        let formObj = this.refs.addUser;
        var fieldsValue = formObj.getFieldsValue();
        console.log(fieldsValue);
        console.log(e);
        this.setState({visible: false});
    };

    // 点击取消
    handleCancel = (e) => {
        console.log(e);
        this.setState({visible: false});
    };

    render() {
        const onFinish = (values) => {
            console.log(values);
        };

        return (<div>
            <Space direction="vertical">
                <Button type="primary" onClick={this.showModal}>添加用户</Button>
                <Table columns={columns} dataSource={dataSource}/>
            </Space>
            <Modal title="添加用户" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <Form {...layout} name="add-user" ref="addUser" validateMessages={validateMessages}>
                    <Form.Item name={['user', 'name']} label="姓名" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="邮箱" rules={[{required: true}, {type: 'email'}]}>
                        <Input/>
                    </Form.Item>
                    {/* <Form.Item name={['user', 'age']} label="Age" rules={[{
                                type: 'number',
                                min: 0,
                                max: 99
                            }
                        ]}>
                        <InputNumber/>
                    </Form.Item> */}
                    <Form.Item name={['user', 'password']} label="密码" rules={[{required: true}]}>
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item name={['user', 'repassword']} label="确认密码" rules={[{required: true}]}>
                        <Input.Password placeholder="请再次输入密码" />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="个人网站">
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="个人描述">
                        <Input.TextArea/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>)
    }
}
