import './App.css';
import NavbarEdited from './components/navbar/nav';
import PageHedder from './components/hedder/hedder';
import LoginPage from './Pages/LoginPage/loginPage';
import Dashboard from './Pages/Dashboard/Dashboard';
// import Revenue from './Pages/Dashboard/Dashboard';
import TransactionsPage from './Pages/Transactions/transaction';
import InventoryPage from './Pages/InventoryPage/inventory';
import ProductsPage from './Pages/ProductPage/product';

function App() {
  return (
    <div className="App">
      <ProductsPage/>
    </div>
  );
}

export default App;
