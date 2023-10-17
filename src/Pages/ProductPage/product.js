import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox } from 'antd';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { Button, Space } from 'antd';
import ProductModal from './addProductModel';

const dummydata = [
    {
        key: '1',
        productId: 'P001',
        productName: 'Laptop',
        availableStock: 25,
        price: '$1000'
    },
    {
        key: '2',
        productId: 'P002',
        productName: 'Mobile Phone',
        availableStock: 50,
        price: '$500'
    },
    {
        key: '3',
        productId: 'P003',
        productName: 'Headphones',
        availableStock: 150,
        price: '$50'
    },
    {
        key: '4',
        productId: 'P004',
        productName: 'Keyboard',
        availableStock: 60,
        price: '$20'
    },
    {
        key: '5',
        productId: 'P005',
        productName: 'Mouse',
        availableStock: 80,
        price: '$15'
    }
];


export default function ProductsPage() {
    const [data, setData] = useState(dummydata);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

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
          title: 'Product ID',
          dataIndex: 'productId',
        },
        {
          title: 'Product Name',
          dataIndex: 'productName',
        },
        {
          title: 'Available Stock',
          dataIndex: 'availableStock',
        },
        {
            title: 'Price',
            dataIndex: 'price',
          }
    ];

    const handleCheck = (e, key) => {
        const newCheckedKeys = e.target.checked
            ? [...checkedKeys, key]
            : checkedKeys.filter(checkedKey => checkedKey !== key);
        setCheckedKeys(newCheckedKeys);
    
        if (e.target.checked) {
            const selected = data.find(item => item.key === key);
            setSelectedProduct(selected);
        } else {
            setSelectedProduct(null);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleAdd = () => {
        showModal(); 
    };

    const handleDelete = () => {
        // Handle deleting checked transactions
        // ...
    };

    const handleUpdate = () => {
        if (checkedKeys.length === 1) { 
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
                            <div className='button-container'>
                                <Button className='transaction-btn' onClick={handleAdd}>New Product</Button>
                                <Button type='primary' className='transaction-btn' id="delete" onClick={handleDelete}>Delete Product</Button>
                                <Button className='transaction-btn' onClick={handleUpdate}>Update Product</Button>
                            </div>
                            <div className='data-area'>
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductModal 
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                selectedProduct={selectedProduct}
            />

        </>
    );
}
