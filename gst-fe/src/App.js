import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Sales from './components/Sales';
import Purchase from './components/Purchase';
import Filing from './components/Filing';
import FilingDetails from './components/FilingDetails';
import { initialState, userReducer } from './reducers/userReducer';
import ManageAccounts from './components/accounts/ManageAccounts';
import ViewAccounts from './components/accounts/ViewAccounts';
import {API_BASE_URL} from "./config/constant";
import axios from 'axios';
import ViewAccountDetail from './components/accounts/ViewAccountDetail';

export const UserContext = createContext();

const CustomRouting = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const checkTokenValidity = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const config = {
      headers: {
          'Authorization': `Bearer ${token}`
      }
    };
    //API call to get logged in user information
    axios.get(`${API_BASE_URL}/api/checkTokenValidity`, config)
    .then((userData)=>{

    })
    .catch((error) => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
        console.log(error);

    })
  }
  useEffect(() => {
    checkTokenValidity();
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const user = {"token": token, "userData": userData}
      dispatch({ type: 'USER', payload: user });
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);//called only once when component loads/mounts

  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/filing" element={<Filing />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route exact path="/purchase" element={<Purchase />} />
        <Route exact path="/manage" element={<ManageAccounts />} />
        <Route exact path="/manage/view" element={<ViewAccounts />} />
        <Route exact path="/manage/view/:id" element={<ViewAccountDetail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/filing/details/:filingId" element={<FilingDetails />} />
    </Routes>
  );
}

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <div>
          <NavBar />
          <CustomRouting />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
