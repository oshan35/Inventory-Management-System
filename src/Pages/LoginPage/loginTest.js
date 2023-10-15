import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './loginpage.css';
import { fetchAdminLogin } from '../../api';
import { useInventory } from '../../components/InventoryContext';

const LoginPageEdited = () => {
    const [isChecked, setIsChecked] = useState(false);
    const { inventoryId, setInventoryId } = useInventory();



    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const onFinish = async (values) => {
        try {
            // API request to the backend
            const response = await fetchAdminLogin(values);
            
            // Handle response accordingly
            if (response.status === 200) {
                setInventoryId(response);
                message.success('Login successful!');
                // Further logic (e.g., redirect, store user data, etc.)
            } else {
                message.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('An error occurred during the login process:', error);
            message.error('An error occurred. Please try again later.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="LoginContainer">
            <div className="LoginDetails">
                <div className="Rectangle37">
                    <div className="Rectangle38"/>
                    <div className="Frame2">
                        <div className="Login">Login</div>
                        <div className="SeeYourGrowthAndGetSupport">See your growth and get support!</div>
                    </div>
                </div>
                <Form
                    className="InputCollection"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox onChange={handleCheckboxToggle} checked={isChecked}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-btn">
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
                
            </div>
            <div className='Background'/>
            
        </div>
    );
}

export default LoginPageEdited;
