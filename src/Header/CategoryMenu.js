function CategoryMenu(){
    return (
        <div className="nav-item dropdown rounded-3 border">
            <a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-ui-radios-grid"></i><span> Category</span>
            </a>
                            
            <div className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item " href="ptc_categories.php"><i className="bi bi-mouse2"></i> PTC sites</a>
                <a className="dropdown-item " href="#"><i className="bi bi-pie-chart"></i> Revenue Share Sites</a>
                <a className="dropdown-item " href="#"><i className="bi bi-minecart-loaded"></i> Cloud Mining sites</a>
                <hr className="dropdown-divider"/>
                <a className="dropdown-item" href="#">All Categories</a>
            </div>
        </div>
    );
}
export default CategoryMenu;