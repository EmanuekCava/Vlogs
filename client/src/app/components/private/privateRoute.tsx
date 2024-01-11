
import { Navigate, Outlet } from "react-router-dom";

import { isStorage } from "./storage";

const PrivateRoute = () => {

    return isStorage() ? <Outlet /> : <Navigate to="/" />
            
}

export default PrivateRoute