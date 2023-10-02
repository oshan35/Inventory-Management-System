import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox } from 'antd';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { Button, Space } from 'antd';
import TransactionModal from './transactionForm'; 
import './transaction.css';

export default function TransactionsPage() {
    const [data, setData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const columns = [
        {
            title: '',
            dataIndex: 'checkbox',
            render: (_, record) => (
                <Checkbox
                    checked={checkedKeys.includes(record.key)}
                    onChange={(e) => handleCheck(e, record.key)}
                />
            ),
            width: '5%',
        },
        {
          title: 'Order ID',
          dataIndex: 'orderId',
        },
        {
          title: 'Product ID',
          dataIndex: 'productId',
        },
        {
          title: 'Customer Name',
          dataIndex: 'customerName',
        },
        {
          title: 'Items',
          dataIndex: 'items',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
    ];
    const handleCheck = (e, key) => {
        // ... (handleCheck definition remains the same)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleAdd = () => {
        showModal();  // Show the modal when the Add button is clicked
    };

    const handleDelete = () => {
        // Handle deleting checked transactions
        // ...
    };

    const handleUpdate = () => {
        // Handle updating checked transactions
        // ...
    };

    const handleOk = (form) => {
        form.validateFields()
            .then(values => {
                form.resetFields();
                // Handle form submission, e.g., save transaction
                console.log('Submitted values:', values);
                setIsModalVisible(false);
            })
            .catch(info => {
                console.log('Validation Failed:', info);
            });
    };
    return (
        <>
            <PageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <NavbarEdited />
                    </div>
                    <div className="transactions-content">
                        <div className="row">
                            <div className='button-container'>
                                <Button className='transaction-btn' onClick={handleAdd}>New Transactions</Button>
                                <Button type='primary' className='transaction-btn' id="delete" onClick={handleDelete}>Delete Transactions</Button>
                                <Button className='transaction-btn' onClick={handleUpdate}>Update Transactions</Button>
                            </div>
                            <div className='data-area'>
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TransactionModal 
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    );
}
