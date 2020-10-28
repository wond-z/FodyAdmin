import React, {Component} from 'react';
import {Form, Input, Button, Radio, Select, Checkbox} from 'antd';
import {SettingOutlined} from '@ant-design/icons';
const {Option} = Select;

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

class About extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        return (<Form {...layout} name="basic" initialValues={{
                remember: true
            }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="用户名" name="username" rules={[{
                        required: true,
                        message: '请输入用户！'
                    }
                ]}>
                <Input/>
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{
                        required: true,
                        message: '请输入密码！'
                    }
                ]}>
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
        </Form>)
    }
}

export default About;
