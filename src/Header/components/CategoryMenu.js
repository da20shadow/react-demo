import {Link} from 'react-router-dom';
function CategoryMenu(){
    return (
        <div className="nav-item dropdown rounded-3 border">
            <Link to="/" className="nav-link " id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-ui-radios-grid"></i><span> Category</span>
            </Link>
                            
            <div className="dropdown-menu shadow-lg" aria-labelledby="navbarDropdownMenuLink">
                <Link to="ptc_categories" className="dropdown-item "><i className="bi bi-mouse2"></i> PTC sites</Link>
                <Link to="revshares" className="dropdown-item "><i className="bi bi-pie-chart"></i> Revenue Share Sites</Link>
                <Link to="cloud_mining" className="dropdown-item "><i className="bi bi-minecart-loaded"></i> Cloud Mining sites</Link>
                <hr className="dropdown-divider"/>
                <Link to="all_categories" className="dropdown-item">All Categories</Link>
            </div>
        </div>
    );
}
export default CategoryMenu;