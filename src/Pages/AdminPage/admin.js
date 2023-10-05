import React, { useState, useEffect } from 'react';
import AdminNavBar from '../../components/admin-components/admin-nav/admin-navbar';
import AdminPageHedder from '../../components/admin-components/admin-hedder/adminHedder';

import { Input, Table, Checkbox } from 'antd';

export default function Admin() {
    const [data, setData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

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
          title: 'Inventory ID',
          dataIndex: 'inventoryId',
        },
        {
          title: 'Location',
          dataIndex: 'location',
        },
        {
            title: 'Number of Total Items Available',
            dataIndex: 'availableItems',
        }
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
            <AdminPageHedder />
            <div className="container">
                <div className="column">
                    <div className="nav-bar">
                        <AdminNavBar />
                    </div>
                    <div className="dashboard-content">
                        <div className="row">
                            <div className='data-area'>
                                    <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
