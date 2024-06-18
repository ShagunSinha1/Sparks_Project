import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomersList from './components/CustomersList';
import CustomerDetails from './components/CustomerDetails';
import TransferMoney from './components/TransferMoney';
import AddCustomer from './components/AddCustomer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={HomePage}/>
        <Route path="/customers" exact Component={CustomersList}/>
        <Route path="/customer/:id" Component={CustomerDetails}/>
        <Route path="/transfer/:id" Component={TransferMoney}/>
        <Route path="/add-customer" Component={AddCustomer} />
      </Routes>
    </Router>
  );
}

export default App;
