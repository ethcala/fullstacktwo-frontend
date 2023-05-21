import Link from "next/link";

export default function Header(params:any) {
    return (
        <div className="navbar nav-light">
            <div className="item-holder row">
                <p className="nav-title"><Link href="/index">Cat's Cradle</Link></p>
                <p className="nav-item"><Link href="/index">Home</Link></p>
                <p className="nav-item"><Link href="/search">Search</Link></p>
                <p className="nav-item"><Link href="/account">Account</Link></p>
            </div>
            <a href="javascript:void(0);" className="nav-icon">
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}