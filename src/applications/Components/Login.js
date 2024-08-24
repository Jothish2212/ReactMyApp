import React, { Fragment, useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
import { useRef } from 'react';
import secureLocalStorage from 'react-secure-storage';


const LoginForm = () => {
    secureLocalStorage.removeItem('tested_lmx');
    const loginButtonRef = useRef(null)
    const Navigate = useNavigate();
    const [LoginFormData, setLoginFormData] = useState({
        email: 'guru@gmail.com',
        password: 'guruguru'
    });

    const [isValid, setisValid] = useState(false);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                if (loginButtonRef.current) {
                    console.log(loginButtonRef.current)
                    loginButtonRef.current.click();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
const generateToken = (length) => {
    const bytes = new Uint8Array(length);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, byte => byte.toString(36).padStart(2, '0')).join('').slice(0, length);
};
    
    const token = generateToken(20);
    function submit_auth() {
        setisValid(true)
        if (ValidateLoginForm()) {
            console.log(LoginFormData);
            axios.post('http://127.0.0.1:8000/auth/login_validate/', LoginFormData)
                .then((res) => {
                    console.log(res)
                    if (res.data.status == 200) {
                        toast.success("Login Success");
                        secureLocalStorage.setItem('tested_lmx', {
                            pref: 'auth-token',
                            token: token,
                            login_expiry: new Date(),
                        })
                        Navigate('/admin/Dashboard')
                    } else if (res.data.status == 400) {
                        toast.error("Invalid Credentials");
                        setLoginFormData({
                            email: '',
                            password: ''
                        });
                    }
                })
                .catch((error) => {
                    toast.error("No Response From the BackEnd Server");
                })
        }
    }

    function ValidateLoginForm() {
        let is_valid = true;
        if (LoginFormData.email == '') {
            toast.error("Please Enter the Email");
            is_valid = false
        } else if (LoginFormData.email != '' && (!LoginFormData.email.includes('@'))) {
            toast.error("Enter the Valid Email Address")
            is_valid = false
        } else if (LoginFormData.password == '') {
            toast.error("Please Enter the Password")
            is_valid = false
        }

        return is_valid;
    }

    return (
        <Fragment>
            <form>
                <div className='flex items-center justify-center h-screen bg-slate-200'>
                    <div className="container  rounded-2xl custom-container" style={{ maxWidth: "400px" }}>
                        <div className='text-2xl text-blue-600 font-bold flex justify-center pb-2'>
                            <label>Login</label>
                        </div>
                        <div className="container border-2 px-4 pt-2 rounded-2xl bg-white custom-container" style={{ maxWidth: "400px" }}>
                            {/* <form className="mx-auto"> */}
                            <div className='text-xs p-3 flex items-center justify-center' >
                                Sign in to start your session
                            </div>
                            <div className="mb-3 py-[]">
                                <input type="email"
                                    className={`form-control rounded-md py-2 px-3 ${isValid == false ? '' : isValid && LoginFormData.email == '' ? 'is-invalid' : 'is-valid'}`}
                                    id="email"
                                    name='email'
                                    placeholder="Email"
                                    autoComplete='off'
                                    onChange={(e) => setLoginFormData({ ...LoginFormData, [e.target.name]: e.target.value })}
                                    value={LoginFormData.email}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="password"
                                    className={`form-control rounded-md py-2 px-3 ${isValid == false ? '' : isValid && LoginFormData.password == '' ? 'is-invalid' : 'is-valid'}`}
                                    id="password"
                                    placeholder="Password"
                                    autoComplete='off'
                                    name='password'
                                    onChange={(e) => setLoginFormData({ ...LoginFormData, [e.target.name]: e.target.value })}
                                    value={LoginFormData.password}
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button type="button" ref={loginButtonRef} onClick={submit_auth} className="btn btn-primary py-2 px-4">Login</button>
                            </div>
                            <p className='text-blue-300'>Forget Password?<Link to={`/admin/forgot_password`}>Click Here</Link></p>
                            {/* </form> */}
                            <p className="mt-3 text-center">Don't have an account? <Link to={'/admin/signup'}>Sign-Up</Link></p>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </Fragment>


    );
    {/* <label htmlFor="password">Password</label> */ }
    {/* <label htmlFor="email">Email address</label> */ }

}

export default LoginForm;
