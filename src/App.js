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

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="inventories" element={<InventoryPage />} />
        <Route path="transactions" element={<TransactionsPage/>} />  {/* Check this line */}
        <Route path="products" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
