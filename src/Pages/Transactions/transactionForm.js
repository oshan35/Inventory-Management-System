// TransactionModal.js
import React from 'react';
import { Modal, Form, Input } from 'antd';

export default function TransactionModal({ isModalVisible, handleOk, handleCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            title="New Transaction"
            visible={isModalVisible}
            onOk={() => handleOk(form)}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item
                    name="orderId"
                    label="orderID"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Product ID"
                    label="productID"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Customer Name"
                    label="cusName"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Items"
                    label="items"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Total"
                    label="total"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
