import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox } from 'antd';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { Button, Space } from 'antd';
import TransactionModal from './transactionForm'; 
import './transaction.css';
import { useInventory } from '../../components/InventoryContext';

const sampleData = [
    {
        key: '1',
        orderId: '123456',
        productId: 'P12345',
        transactionDate: '2023-09-21',
        customerName: 'John Doe',
        items: 'Item1, Item2',
        total: '$200.00'
    },
    {
        key: '2',
        orderId: '654321',
        productId: 'P54321',
        transactionDate: '2023-09-21',
        customerName: 'Jane Smith',
        items: 'Item3, Item4',
        total: '$300.00'
    },
    {
        key: '3',
        orderId: '112233',
        productId: 'P67890',
        transactionDate: '2023-09-21',
        customerName: 'Bob Johnson',
        items: 'Item5, Item6',
        total: '$150.00'
    }
];

export default function TransactionsPage() {
    const [data, setData] = useState(sampleData);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [inventoryId, setInventoryId] = useInventory();


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
            title: 'Transaction Date',
            dataIndex: 'transactionDate',
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
        const newCheckedKeys = e.target.checked
            ? [...checkedKeys, key]
            : checkedKeys.filter(checkedKey => checkedKey !== key);
        setCheckedKeys(newCheckedKeys);
    
        if (e.target.checked) {
            const selected = data.find(item => item.key === key);
            setSelectedTransaction(selected);
        } else {
            setSelectedTransaction(null);
        }
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
        if (checkedKeys.length === 1) {  // Ensure only one transaction is selected
            setIsModalVisible(true);
        } else {
            alert('Please select exactly one transaction to update.');
        }
    };


    const handleOk = (form) => {
        form.validateFields()
            .then(values => {
                form.resetFields();
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
                            <p>id: {inventoryId}</p>
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
                transaction={selectedTransaction}
            />

        </>
    );
}
