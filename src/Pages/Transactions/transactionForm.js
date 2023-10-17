// TransactionModal.js
import React, { useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';

export default function TransactionModal({ isModalVisible, handleOk, handleCancel, transaction }) {
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(() => {
        if (transaction) {
            form.setFieldsValue({
                orderId: transaction.orderId,
                productId: transaction.productId,
                customerName: transaction.customerName,
                items: transaction.items,
                total: transaction.total
            });
        } else {
            form.resetFields();
        }
    }, [transaction, form]);
    

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
                    name="Transaction ID"
                    label="transactionID"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Product ID"
                    label="product"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Transaction Date"
                    label="date"
                    rules={[{ required: true, message: 'Please input the Transaction Date!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Quantity"
                    label="quantity"
                    rules={[{ required: true, message: 'Please input the Quantity!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Unit Price"
                    label="unitPrice"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Buy/Sell"
                    label="type"
                    rules={[{ required: true, message: 'Please input the order ID!' }]}
                >
                <Select placeholder="Select a type">
                    <Option value="buy">Buy</Option>
                    <Option value="sell">Sell</Option>
                </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}
