
import React, { createContext, useContext, useState, useEffect } from 'react';

const InventoryContext = createContext();

export const useInventory = () => {
    return useContext(InventoryContext);
};

export const InventoryProvider = ({ children }) => {
    // Initialize from sessionStorage or default to null
    const initialInventoryId = sessionStorage.getItem('inventoryId') || null;
    const initialAdminId = sessionStorage.getItem('adminId') || null;

    const [inventoryId, setInventoryId] = useState(initialInventoryId);
    const [adminId, setAdminId] = useState(initialAdminId);

    // Update sessionStorage whenever inventoryId or adminId changes
    useEffect(() => {
        if (inventoryId) {
            sessionStorage.setItem('inventoryId', inventoryId);
        } else {
            sessionStorage.removeItem('inventoryId');
        }
    }, [inventoryId]);

    useEffect(() => {
        if (adminId) {
            sessionStorage.setItem('adminId', adminId);
        } else {
            sessionStorage.removeItem('adminId');
        }
    }, [adminId]);

    return (
        <InventoryContext.Provider value={{ inventoryId, setInventoryId, adminId, setAdminId }}>
            {children}
        </InventoryContext.Provider>
    );
};
