import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();



export const useInventory = () => {

    return useContext(InventoryContext);

};



export const InventoryProvider = ({ children }) => {

    const [inventoryId,setInventoryId] = useState(null);
    const [adminId,setAdminId] = useState(null);


    return (

        <InventoryContext.Provider value={{inventoryId,setInventoryId, adminId, setAdminId}}>

            {children}

        </InventoryContext.Provider>

    );

};