import './assets/css/header.css';
import CategoryMenu from "./components/CategoryMenu";
import MainMenu from "./components/MainMenu";
import {Link} from 'react-router-dom';

function Header({
    isLogged,
}) {
    return (
        <nav className="navbar navbar-expand-md border-bottom">

            <div className="container-fluid px-3 px-xl-5">
                
                {/* Logo */}
                <Link to="home" className="navbar-brand">
                    LOGO
                    {/* <img src={assets/img/logo.png} alt={Logo} 
                        width={'160px'} height={'30px'} 
                        className="light-mode-item navbar-brand-item"/> */}
                </Link>

                {/* Open menu button for small devices */}
                <button className="navbar-toggler ms-auto collapsed" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>

                {/* Collapsable navigation */}
                <div className="collapse navbar-collapse w-100" id="navbarCollapse">
                    {/* Dropdown Category menu */}
                    <CategoryMenu/>
                    {/* Main Menu */}
                    <MainMenu isLogged={isLogged} />
                </div>
            </div>

        </nav>
    );
}
export default Header;