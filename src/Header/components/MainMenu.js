import {Link, NavLink} from 'react-router-dom';
import Logout from '../../Logout';

function MainMenu({
    isLogged,
}) {
    let guestNavigation = (
        <>
            <NavLink to="login"
                className={({ isActive }) => 'nav-link' 
                + (isActive ? ' activeNav' : '')}>
                    <i className="bi bi-box-arrow-in-right"></i> Login
            </NavLink>

            <NavLink to="register" 
            className={({ isActive }) => 'nav-link' 
            + (isActive ? ' activeNav' : '')}>
                <i className="bi bi-person-plus"></i> Register
            </NavLink>
        </>);

    let userNavigation = (
        <>
            <div className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-plus-lg"></i> Add
                </div>
                {/* Dropdown Menu Links */}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="add_funds" className="dropdown-item" ><i className="bi bi-coin"></i> Add Funds</Link>
                    <Link to="add_new_ad" className="dropdown-item" ><i className="bi bi-badge-ad"></i> New Ad</Link>
                    <Link to="add_new_project" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#addProjectModal"><i className="bi bi-clipboard-data"></i> New Project</Link>
                    <Link to="add_new_post" className="dropdown-item"><i className="bi bi-pencil-square"></i> Blog Post</Link>
                </div>
            </div>
            <NavLink to="/account"
             className={({ isActive }) => 'nav-link' 
                + (isActive ? ' activeNav' : '')}>
                    <i className="bi bi-box-arrow-in-right"></i> Account
            </NavLink>

            <NavLink to="/profile" 
            className={({ isActive }) => 'nav-link' 
            + (isActive ? ' activeNav' : '')}>
                <i className="bi bi-person-plus"></i> Edit Profile
            </NavLink>
            <Link to='/logout' className='nav-link' element={<Logout />}>Logout</Link>
        </>);

    return (
        <div className="navbar-nav navbar-nav-scroll me-auto ">
                        <Link to="home" className="nav-link"><i className="bi bi-house"></i> Home</Link>
                        <Link to="news" className="nav-link"><i className="bi bi-newspaper"></i> News</Link>
                        
                        {isLogged 
                            ? userNavigation
                            :guestNavigation
                        }
                        
                        <Link to="report_scam" className="nav-link" data-bs-toggle="modal" data-bs-target="#reportProjectModal"><i className="bi bi-exclamation-triangle"></i> Report SCAM</Link>
        </div>
    );
}
export default MainMenu;