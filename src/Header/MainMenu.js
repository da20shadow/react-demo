function MainMenu() {
    return (
        <div className="navbar-nav navbar-nav-scroll me-auto ">
                        <a href="#" className="nav-link"><i className="bi bi-house"></i> Home</a>
                        <a href="#" className="nav-link"><i className="bi bi-newspaper"></i> News</a>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-plus-lg"></i> Add
                            </a>
                            {/* Dropdown Menu Links */}
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="add_funds.php"><i className="bi bi-coin"></i> Add Funds</a>
                                <a className="dropdown-item" href="add_new_ad.php"><i className="bi bi-badge-ad"></i> New Ad</a>
                                <a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#addProjectModal"><i className="bi bi-clipboard-data"></i> New Project</a>
                                <a className="dropdown-item" href="add_new_post.php"><i className="bi bi-pencil-square"></i> Blog Post</a>
                            </div>
                        </div>
                        {/* Add New ad, post.. Dropdown END */}
                        <a href="login.php" className="nav-link"><i className="bi bi-box-arrow-in-right"></i> Login</a>
                        <a href="register.php" className="nav-link"><i className="bi bi-person-plus"></i> Register</a>
                        <a href="" className="nav-link" data-bs-toggle="modal" data-bs-target="#reportProjectModal"><i className="bi bi-exclamation-triangle"></i> Report SCAM</a>
        </div>
    );
}
export default MainMenu;