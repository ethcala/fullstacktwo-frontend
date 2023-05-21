export default function Header(params:any) {
    return (
        <div className="navbar nav-light">
            <div className="item-holder row">
                <p className="nav-title">Cat's Cradle</p>
                <p className="nav-item">Home</p>
                <p className="nav-item">Search</p>
                <p className="nav-item">Account</p>
            </div>
            <a href="javascript:void(0);" className="nav-icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}