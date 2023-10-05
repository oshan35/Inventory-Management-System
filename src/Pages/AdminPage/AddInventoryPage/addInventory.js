import React, { useState, useEffect } from 'react';
import AdminNavBar from '../../../components/admin-components/admin-nav/admin-navbar'
import AdminPageHedder from '../../../components/admin-components/admin-hedder/adminHedder';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Input, Form, InputNumber, Select, Button } from 'antd';
import L from 'leaflet';
import './addInventory.css';



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationPicker = ({ setLocation, setFieldValue }) => {
    
    const map = useMapEvents({
        click: (e) => {
            const newLocation = e.latlng;
            setLocation(newLocation);
            setFieldValue('location', newLocation); 
            console.log(newLocation);
        },
    });
    return null; 
};


export default function AddInventory() {
    const [location, setLocation] = React.useState(null);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form Values:', values);
        console.log('Selected Location:', location);
        // Add your logic to add the inventory item to your database/API here
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
                            <div className='form-area'>
                                <h2>Add New Inventory</h2>
                                <Form 
                                    name="addInventory" 
                                    layout="vertical" 
                                    onFinish={onFinish}
                                >
                                    <Form.Item 
                                        name="productName" 
                                        label="Product Name" 
                                        rules={[{ required: true, message: 'Please input the product name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item 
                                        name="quantity" 
                                        label="Quantity" 
                                        rules={[{ required: true, message: 'Please input the quantity!' }]}
                                    >
                                        <InputNumber min={1} />
                                    </Form.Item>
                                    <Form.Item 
                                        name="location" 
                                        label="Location" 
                                        rules={[{ required: true, message: 'Please select a location!' }]}
                                    >
                                        <MapContainer 
                                            center={[6.079635106310293, 80.19188949389012]} 
                                            zoom={13} 
                                            style={{ height: '300px', width: '100%' }}
                                        >
                                            <TileLayer
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            {location && <Marker position={location} />}
                                            <LocationPicker setLocation={setLocation} setFieldValue={form.setFieldsValue} />
                                        </MapContainer>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Add Inventory
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
