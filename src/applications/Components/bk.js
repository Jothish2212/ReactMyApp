import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [valid, setvalid] = useState(false);
    const [pass_does_not_match, setpass_does_not_match] = useState(false);


    const [FormData, SetFormData] = useState({
        firstName: '',
        LastName: '',
        Email: '',
        Mobile: '',
        Password: '',
        confirmPassword: ''
    });
    const [Error, SetError] = useState({
        firstName: '',
        LastName: '',
        Email: '',
        Mobile: '',
        Password: '',
        confirmPassword: '',
        Password_does_not_macth: ''

    });
    const [Touched, SetTouched] = useState({
        firstName: false,
        LastName: false,
        Email: false,
        Mobile: false,
        Password: false,
        confirmPassword: false
    });


    const handleBlur = (field) => {
        SetTouched({ ...Touched, [field]: true });
    };
    function signupSubmit() {
        console.log(FormData);
        if (validateForm()) {       
            // axios.post('http://127.0.0.1:8000/laptop/currency/',FormData)
        }
    }

    // if(FormData.Password==FormData.confirmPassword){
    //     SetError(Error.Password_does_not_macth='')
    // }

    function validateForm() {
        let isValid = true;
        setvalid(true)
        const setNewErrors = {
            firstName: '',
            LastName: '',
            Email: '',
            Mobile: '',
            Password: '',
            confirmPassword: '',
            Password_does_not_macth: ''
        }

        if ((FormData.confirmPassword !== FormData.Password)) {
            isValid = false;
            setNewErrors.Password_does_not_macth = 'Entered Password Does Not Match';
            setpass_does_not_match(true);
        }
        console.error(setNewErrors);
        SetError(setNewErrors);
        return isValid;
    }

    console.log(valid);
    console.log((FormData.Mobile.length < 10))
    console.log((FormData.Mobile === '' || FormData.Mobile.length < 10))



    return (
        <div className="mb-20 mt-5 flex items-center px-5 py-5 shadow-2xl container-sm bg-blue-100 border-2 border-blue-200 rounded-lg" style={{ maxWidth: "500px" }}>
            <form>
                <div className='text-2xl text-blue-600 font-bold flex justify-center px-5 pb-2'>
                    <label>Sign Up</label>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text"
                                name='firstName'
                                onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                value={FormData.firstName}
                                className={`form-control ${FormData.firstName === '' && valid === false ? "" : valid === true && FormData.firstName === '' ? 'is-invalid' : 'is-valid'}`}
                                id="firstName"
                                placeholder="First Name"
                                autoComplete='off'
                                onBlur={() => handleBlur('firstName')} />
                            <label htmlFor="firstName">First Name</label>
                            {/* {Error.firstName ? <div className="error">Enter First name</div> : ''} */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text"
                                onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                                value={FormData.LastName}
                                name='LastName'
                                className={`form-control ${FormData.LastName === '' && valid === false ? "" : valid === true && FormData.LastName === '' ? 'is-invalid' : 'is-valid'}`}
                                id="lastName"
                                placeholder="Last Name"
                                autoComplete='off'
                                onBlur={() => handleBlur('LastName')} />
                            <label htmlFor="lastName">Last Name</label>
                            {/* {Error.LastName ? <span className='error'>{Error.LastName}</span> : ''} */}
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                        <select className='custom-select'>
                        <option value="+91">+91 (India)</option>
                        </select>
                        </div>
                        <input type="number"
                            onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                            value={FormData.Mobile}
                            name='Mobile'
                            className={`form-control ${FormData.Mobile === '' && valid === false ? "" : valid === true && (FormData.Mobile === '' || FormData.Mobile.length != 10) ? 'is-invalid' : 'is-valid'}`}
                            id="mobile"
                            placeholder="Mobile"
                            autoComplete='off'
                            onBlur={() => handleBlur('Mobile')} />
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="email"
                        onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                        value={FormData.Email}
                        name='Email'
                        className={`form-control ${FormData.Email === '' && valid === false ? "" : valid === true && FormData.Email === '' ? 'is-invalid' : 'is-valid'}`}
                        id="email"
                        placeholder="Email"
                        autoComplete='off'
                        onBlur={() => handleBlur('Email')} />
                    <label htmlFor="email">Email</label>
                    {/* {Error.Email ? <span className='error'>{Error.Email}</span> : ''} */}

                </div>
                <div className="form-floating mb-3">
                    <input type="password"
                        onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                        value={FormData.Password}
                        name='Password'
                        className={`form-control ${FormData.Password === '' && valid === false ? "" : valid === true &&  ( FormData.Password === '' || (FormData.confirmPassword !== FormData.Password) ) ? 'is-invalid' : 'is-valid'}`}
                        id="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onBlur={() => handleBlur('Password')} />
                    <label htmlFor="password">Password</label>
                    {Error.Password_does_not_macth ? <span className='error'>{Error.Password_does_not_macth}</span> : ''}

                </div>
                <div className="form-floating mb-3">
                    <input type="password"
                        onChange={(e) => SetFormData({ ...FormData, [e.target.name]: e.target.value })}
                        value={FormData.confirmPassword} name='confirmPassword'
                        className={`form-control ${FormData.confirmPassword === '' && valid === false ? "" : valid === true && ( FormData.confirmPassword === '' || (FormData.confirmPassword !== FormData.Password) )? 'is-invalid' : 'is-valid'}`}
                        id="confirmPassword" placeholder="Confirm Password"
                        autoComplete='off'
                        onBlur={() => handleBlur('confirmPassword')} />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    {Error.Password_does_not_macth ? <span className='error'>{Error.Password_does_not_macth}</span> : ''}
                </div>
                <button type="button" onClick={signupSubmit} className="btn btn-primary btn-block mt-3">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
