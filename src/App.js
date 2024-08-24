import './App.css';
import { Fragment } from 'react';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import SignUp from './applications/Components/SignUp';
import Login from './applications/Components/Login';
import Dashboard from './applications/Components/Dashboard/Dashboard';
import Customer from './applications/Master/Customer';
import CustomerList from './applications/Master/CustomerList';
import { useLocation } from 'react-router-dom';
import { Forgot_password } from './applications/Components/Forgot_password';
import secureLocalStorage from 'react-secure-storage';
import Navbar from './applications/Components/Navbar';
import PrivateRoute from './applications/Components/PrivateRoute';
import LoginForm from './applications/Components/Login';
import Error404Classic from './applications/Components/404Page';
import Employee from './applications/Master/Employee';
import getCountryWiseStates from './applications/Master/state';
function App() {
  // console.log(window.location.href)
  const login_status = secureLocalStorage.getItem('tested_lmx');
  const navigate = useNavigate()
  return (
    <Fragment>

      {login_status != null ?
        <>
          <Navbar />
          <Routes>
            <Route exact path={`/admin/login`} element={<LoginForm />}> </Route>
            <Route exact path={`/admin/signup`} element={<SignUp />}> </Route>
            <Route exact path={`/admin/Dashboard`} element={<Dashboard />}> </Route>
            <Route exact path={`/admin/Customer`} element={<Customer />}> </Route>
            <Route exact path={`/admin/CustomerList`} element={<CustomerList />}> </Route>
            <Route exact path={`/admin/forgot_password`} element={<Forgot_password />}> </Route>
            <Route exact path={`/admin/Employee`} element={<Employee/>}></Route>
          </Routes  ></>
        : <Routes>
          <Route exact path={`/admin/login`} element={<LoginForm />}> </Route>
          <Route exact path={""} element={<LoginForm />}> </Route>
          <Route exact path={`/admin/forgot_password`} element={<Forgot_password />}> </Route>
          <Route exact path={`/admin/signup`} element={<SignUp />}> </Route>
          <Route exact path={`/admin/Employee`} element={<Employee/>}></Route>
          <Route exact path={`/admin/getState`} element={<getCountryWiseStates/>}></Route>



        </Routes>

      }

    </Fragment>
  );
}

export default App;
