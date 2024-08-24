import axios from "axios";
import React, { Fragment, useState } from "react";
import { toast,ToastContainer } from "react-toastify";

export const Forgot_password = () => {

    const [email,setEmail] = useState('');

    function setResetLink(){

        if(validateform()){
            axios.get(`http://127.0.0.1:8000/auth/forgot_password`,email)
        }
    }

    function validateform(){
        let valid = true;
        console.log(email)
        console.log(email.includes('@'))

        if(email=='' || !email.includes('@')){
            toast.error('Please Enter the E-mail');   
            valid = false
        }
        return valid
    }
    return (
        <Fragment>
            <div className="">
                <div className="h-screen flex items-center justify-center bg-white  ">
                    <div className="justify-center w-2/6 bg-gray-100 rounded-3xl">
                        <div className="p-5  border-2 bg-gray-100 rounded-2xl">
                            <h6>Did You Forgot Your Password? Don't worry!!</h6>
                            <p></p>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>E-Mail</label>
                                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Enter Your E-Mail" />
                                </div>
                                <div className="form-group flex flex-col justify-content-center ">
                                    <button className="btn btn-primary w-full" onClick={setResetLink}>Send Reset Link</button>
                                    <button className="btn text-center">Return to Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    )
}

