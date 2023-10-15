import './App.css';
import React from "react";
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import NavbarEdited from './components/navbar/nav';
import PageHedder from './components/hedder/hedder';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Revenue from './Pages/Dashboard/Dashboard';
import TransactionsPage from './Pages/Transactions/transaction';
import InventoryPage from './Pages/InventoryPage/inventory';
import ProductsPage from './Pages/ProductPage/product';
import LoginPage from './Pages/LoginPage/loginPage';
import LoginPageEdited from './Pages/LoginPage/loginTest';
import Admin from './Pages/AdminPage/admin';
import AdminLogin from './Pages/AdminPage/AdminLogin/adminLogin';
import AddInventory from './Pages/AdminPage/AddInventoryPage/addInventory';

import { InventoryProvider } from './components/InventoryContext';


function App() {
  return (
    <InventoryProvider>
        <Router>
              <Routes>
                <Route index element={<LoginPageEdited />} />
                <Route path="dashboard" element={<Dashboard/>} />
                <Route path="inventories" element={<InventoryPage />} />
                <Route path="transactions" element={<TransactionsPage/>} />  
                <Route path="products" element={<ProductsPage/>} />
                <Route path="addInventory" element={<AddInventory/>}/>
              </Routes>
              <Routes>
                <Route path='admin-login' index element={<AdminLogin/>}/>
                <Route path="admin" element={<Admin/>}/>
              </Routes>
        </Router>
    </InventoryProvider>
  );
}

export default App;
