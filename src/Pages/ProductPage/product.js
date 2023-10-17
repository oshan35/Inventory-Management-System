import React, { useState, useEffect } from 'react';
import { Input, Table, Checkbox } from 'antd';
import NavbarEdited from "../../components/navbar/nav";
import PageHedder from "../../components/hedder/hedder";
import { Button, Space } from 'antd';
import ProductModal from './addProductModel';
import { useInventory } from '../../components/InventoryContext';
import { fetchProductDetails, addNewProductApi,updateProductAPI } from '../../api';



export default function ProductsPage() {
    const [data, setData] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const {inventoryId} = useInventory();
    const [mode, setMode] = useState('add');



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
          title: 'Unit Price',
          dataIndex: 'unitPrice',
        },
        {
            title: 'Description',
            dataIndex: 'description',
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

    useEffect(() => async () => {
        try {
            console.log(inventoryId);
            const response = await fetchProductDetails(inventoryId);
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.log("Error fetching transaction data")
        }
    },[]);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleAdd = () => {
        setMode('add');
        showModal(); 
    };

    const handleDelete = () => {
        // Handle deleting checked transactions
        // ...
    };

    const handleUpdate = () => {
        if (checkedKeys.length === 1) {
            setMode('update');
            setIsModalVisible(true);
        } else {
            alert('Please select exactly one transaction to update.');
        }
    };

    const handleOk = async (form) => {
        form.validateFields()
            .then(async values => {
                form.resetFields();
                console.log("Values: "+values);
                const productData = {
                    inventoryId: inventoryId,
                    ...values
                };
    
                if (mode === 'add') {
                    try {
                        await addNewProductApi(productData);
                        console.log('Product added successfully');
                    } catch (error) {
                        console.error('Error adding product', error);
                    }
                } else if (mode === 'update') {
                    try {
                        await updateProductAPI(productData); 
                        console.log('Product updated successfully');
                    } catch (error) {
                        console.error('Error updating product', error);
                    }
                }
    
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
