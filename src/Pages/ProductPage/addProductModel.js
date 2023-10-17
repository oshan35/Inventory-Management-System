// TransactionModal.js
import React, { useEffect , useContext} from 'react';
import { Modal, Form, Input } from 'antd';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { FormContext } from 'antd/es/form/context';

export default function ProductModal({ isModalVisible, handleOk, handleCancel, selectedProduct }) {
    const [form] = Form.useForm();

    useEffect(() => {
        console.log("Hello");
        console.log(selectedProduct);
        if (selectedProduct) {
            form.setFieldsValue({
                ProductID: selectedProduct.productId,
                ProductName: selectedProduct.productName,
                availableStock: selectedProduct.availableStock,
                pricePerUnit: selectedProduct.price,
            });
        } else {
            form.resetFields();
        }
    }, [isModalVisible]);
    

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
                    name="ProductID"
                    label="product ID"
                    rules={[{ required: true}]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="ProductName"
                    label="Product Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="availableStock"
                    label="Available Stock"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="pricePerUnit"
                    label="Price per Unit"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
