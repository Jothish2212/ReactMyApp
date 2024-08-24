import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import unprofile_img from '../../assets/images/user/avatar-2.jpg'



const SignUp = () => {
    const Navigate = useNavigate();
    const [valid, setvalid] = useState(false);
    const [Error, SetError] = useState({
        firstname: '',
        lastname: '',
        Mobile: '',
        Email: '',
        Password: '',
        confirmPassword: '',
        is_valid_mobile: '',
        is_valid_email: '',
        Password_does_not_match: ''
    });
    const [FormData, SetFormData] = useState({
        firstname: 'joe',
        lastname: 'Jothish',
        Mobile: Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000,
        Email: Math.floor(Math.random() * (290 - 100 + 1)) + 100 + "@gmail.com",
        Password: '123',
        confirmPassword: '123'
    });


    function signupSubmit() {
        setvalid(true);
        if (validFormData()) {

            // axios.post('http://127.0.0.1:8000/auth/signup/', FormData)
            // axios.get(`http://127.0.0.1:8000/auth/signup/${2}/`)
            axios.post(`http://127.0.0.1:8000/auth/Authenticate/`, FormData)
                .then((res) => {
                    console.log('resposnse', res);
                    if (res.status = 200) {
                        console.log('test', res);
                        toast.success("Sign Up Successfully,You Can Now Login");
                        setTimeout(() => {
                            Navigate('/')
                        }, 3000)
                        // successfull toaster
                    } else {
                        // failure toaster
                        toast.warning("Unable to Proceed Your request!");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toast.warning("An error occurred during the request.");
                });


        }
    }

    function validFormData() {
        let isValid = true;
        const setNewErrors = {
            firstname: '',
            lastname: '',
            Mobile: '',
            Email: '',
            Password: '',
            confirmPassword: '',
            Password_does_not_match: '',
            is_valid_mobile: '',
            is_valid_email: ''
        }
        if (FormData.firstname == '') {
            isValid = false;
            setNewErrors.firstname = 'Enter the First Name'
        }
        if (FormData.lastname == '') {
            isValid = false;
            setNewErrors.lastname = 'Enter the First Name'
        }
        if (FormData.Mobile == '') {
            isValid = false;
            setNewErrors.Mobile = 'Enter the Mobile Number'
        }
        if (FormData.Mobile != '' && (FormData.Mobile.length < 10 || FormData.Mobile.length > 10)) {
            isValid = false;
            setNewErrors.is_valid_mobile = 'Enter the Valid Mobile Number'
        }
        if (FormData.Email == '') {
            isValid = false;
            setNewErrors.Email = 'Enter the Email Address'
        }
        if (FormData.Email != '' && (!FormData.Email.includes('@'))) {
            isValid = false;
            setNewErrors.is_valid_email = 'Enter the Valid Email Address'
        }
        if (FormData.Password == '') {
            isValid = false;
            setNewErrors.Password = 'Enter the Password'
        }
        if (FormData.confirmPassword == '') {
            isValid = false;
            setNewErrors.confirmPassword = 'Enter the Confirm Password'
        }
        if ((FormData.Password != '' && FormData.confirmPassword != '') && (FormData.Password != FormData.confirmPassword)) {
            isValid = false;
            setNewErrors.Password_does_not_match = 'Enter Password Does Not Match'
        }

        SetError(setNewErrors);
        console.error(Error);
        return isValid;
    }
    return (
        <div className=''>
            <div className='container ' >
                <div className='w-full h-full my-9 '>
                    <div className='flex h-full'>
                        <div className='w-1/2 flex flex-col items-center justify-content-center  rounded-l-3xl'>
                            <div className=''>
                                <img src={unprofile_img} width="300" height="300" />
                            </div>
                            <div className='p-2'>
                                <h1 className=' text-green-400 font-bold'>Welcome!!</h1>
                                <h4 className='text-gray-500 indent-16  mx-3 '>
                                    We're Loving giving New Visitors that Chance to Win Big!! Enter your Details...
                                </h4>
                            </div>
                        </div>
                        <div className='w-1/2 bg-green-200 rounded-r-3xl'>
                            <div className="mb-20 mt-5 flex items-center px-5 py-5 shadow-2xl container-sm bg-blue-100 border-2 border-blue-200 rounded-lg" style={{ maxWidth: "500px" }}>
                                <form>
                                    <div className='text-2xl text-blue-600 font-bold flex justify-center px-5 pb-2'>
                                        <label>Sign Up</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    name='firstname'
                                                    value={FormData.firstname}
                                                    id="firstname"
                                                    placeholder="First Name"
                                                    autoComplete='off'
                                                    onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                                    className={`form-control ${valid == false && FormData.firstname == '' ? '' : (valid == true && FormData.firstname == '' ? 'is-invalid' : 'is-valid')}`}
                                                />
                                                <label htmlFor="firstname">First Name</label>
                                                {/* {Error.firstname && FormData.firstname == '' ? <div className="error">Enter First name</div> : ''} */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text"
                                                    value={FormData.lastname}
                                                    name='lastname'
                                                    id="lastname"
                                                    placeholder="Last Name"
                                                    autoComplete='off'
                                                    className={`form-control ${valid == false && FormData.lastname == '' ? '' : (valid == true && FormData.lastname == '' ? 'is-invalid' : 'is-valid')}`}
                                                    onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                                />
                                                <label htmlFor="lastname">Last Name</label>
                                                {/* {Error.lastname && FormData.lastname == '' ? <span className='error'>{Error.lastname}</span> : ''} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <div className='input-group'>
                                            <div className='input-group-prepend'>
                                                <select className='custom-select form-control'>
                                                    <option value="+91">+91 (India)</option>
                                                </select>
                                            </div>
                                            <input type="number"
                                                value={FormData.Mobile}
                                                name='Mobile'
                                                id="mobile"
                                                placeholder="Mobile"
                                                autoComplete='off'
                                                className={`form-control ${valid == false && FormData.Mobile == '' ? '' : (valid == true && (FormData.Mobile == '' || Error.is_valid_mobile != '') ? 'is-invalid' : 'is-valid')}`}
                                                onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                            />
                                        </div>
                                        {Error.is_valid_mobile ? <div className="error">{Error.is_valid_mobile}</div> : ''}

                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email"
                                            value={FormData.Email}
                                            name='Email'
                                            id="email"
                                            placeholder="Email"
                                            autoComplete='off'
                                            className={`form-control ${valid == false && FormData.Email == '' ? '' : (valid == true && (FormData.Email == '' || Error.is_valid_email != '') ? 'is-invalid' : 'is-valid')}`}
                                            onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                        />
                                        <label htmlFor="email">Email</label>
                                        {Error.is_valid_email ? <span className='error'>{Error.is_valid_email}</span> : ''}

                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password"
                                            value={FormData.Password}
                                            name='Password'
                                            id="password"
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            className={`form-control ${valid == false && FormData.Password == '' ? '' : (valid == true && FormData.Password == '' ? 'is-invalid' : 'is-valid')}`}
                                            onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                        />
                                        <label htmlFor="password">Password</label>
                                        {Error.Password_does_not_match ? <span className='error'>{Error.Password_does_not_match}</span> : ''}

                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password"
                                            value={FormData.confirmPassword} name='confirmPassword'
                                            id="confirmPassword" placeholder="Confirm Password"
                                            autoComplete='off'
                                            className={`form-control ${valid == false && FormData.confirmPassword == '' ? '' : (valid == true && FormData.confirmPassword == '' ? 'is-invalid' : 'is-valid')}`}
                                            onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                        />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        {Error.Password_does_not_match ? <span className='error'>{Error.Password_does_not_match}</span> : ''}

                                    </div>
                                    <div align="center">
                                        <button type="button" onClick={signupSubmit} className="btn btn-primary btn-block mt-3">Sign Up</button>
                                    </div>
                                    <p className='p-2'>Already Have an Account?<Link to={'/login'}>Login</Link></p>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
