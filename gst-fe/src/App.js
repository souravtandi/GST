import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Sales from './components/Sales';
import Purchase from './components/Purchase';
import Filing from './components/Filing';
import FilingDetails from './components/FilingDetails';
import AddUser from './components/AddUser';
import ManageUser from './components/ManageUser';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/filing" element={<Filing />} />
          <Route exact path="/sales" element={<Sales />} />
          <Route exact path="/purchase" element={<Purchase />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/filing/details/:filingId" element={<FilingDetails />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/manageuser" element={<ManageUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
