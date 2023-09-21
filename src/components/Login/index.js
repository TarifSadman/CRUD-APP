import React from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login = ({setIsAuthenticated}) => {

  const userEmail = "admin@hotmail.com"
  const userPass = "123456"

  const onFinish = (values) => {
    if (values.username !== userEmail) {
      alert('Wrong username');
      console.log('Wrong values:', values);
      return;
    } else if (values.password !== userPass) {
      alert('Wrong password');
      console.log('Wrong values:', values);
      return;
    } else {
      setIsAuthenticated(true);
      alert('Login successful');
      console.log('Received values:', values);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={1}>Login <LoginOutlined /> </Title>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              type='email'
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
