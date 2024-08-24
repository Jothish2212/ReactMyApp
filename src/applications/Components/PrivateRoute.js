import React from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function PrivateRoute() {
    const navigate = useNavigate();
    const login_status = secureLocalStorage.getItem('tested_lmx');
    React.useEffect(() => {
        (login_status!=null && login_status.token != '' && login_status.token != undefined && login_status.token != null && login_status.token.length == 20) ? navigate('/admin/dashboard') : navigate('/admin/login') 

    },[login_status])

}
export default PrivateRoute;