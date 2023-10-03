// TransactionModal.js
import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';

export default function ProductModal({ isModalVisible, handleOk, handleCancel, transaction }) {
    const [form] = Form.useForm();

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
            title="New Product"
            visible={isModalVisible}
            onOk={() => handleOk(form)}
            onCancel={handleCancel}
        >
            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item
                    name="Product ID"
                    label="productID"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Product Name"
                    label="productName"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Available Stock"
                    label="availableStock"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="Price per Unit"
                    label="pricePerUnit"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
