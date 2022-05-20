import {Link} from 'react-router-dom';

function MainMenu() {
    return (
        <div className="navbar-nav navbar-nav-scroll me-auto ">
                        <Link to="home" className="nav-link"><i className="bi bi-house"></i> Home</Link>
                        <Link to="news" className="nav-link"><i className="bi bi-newspaper"></i> News</Link>
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
                        {/* Add New ad, post.. Dropdown END */}
                        <Link to="login" className="nav-link"><i className="bi bi-box-arrow-in-right"></i> Login</Link>
                        <Link to="register" className="nav-link"><i className="bi bi-person-plus"></i> Register</Link>
                        <Link to="report_scam" className="nav-link" data-bs-toggle="modal" data-bs-target="#reportProjectModal"><i className="bi bi-exclamation-triangle"></i> Report SCAM</Link>
        </div>
    );
}
export default MainMenu;