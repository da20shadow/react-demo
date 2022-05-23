import * as authService from '../services/authServices';
import {Navigate} from 'react-router-dom';
const Logout = ({
    onLogoutHandler
}) => {

    authService.logout();
    onLogoutHandler();
    return <Navigate to='/login' replace={true} />;
};

export default Logout;