import Link from "next/link";

export default function Header(current:any) {

    return (
        <header className="navbar nav-light">
            <div className="item-holder">
                <p className="nav-title"><Link href="/">Cat's Cradle</Link></p>
                {
                    current == "Home" 
                    ? <p className="nav-item active"><Link href="/">Home</Link></p> 
                    : <p className="nav-item"><Link href="/ ">Home</Link></p>
                }
                {
                    current == "Search"
                    ? <p className="nav-item active"><Link href="/search">Search</Link></p>
                    : <p className="nav-item"><Link href="/search">Search</Link></p>
                }
                {
                    current == "Account"
                    ? <p className="nav-item active"><Link href="/account">Account</Link></p>
                    : <p className="nav-item"><Link href="/account">Account</Link></p>
                }
            </div>
            <a href="" className="nav-icon">
                <i className="fa fa-bars"></i>
            </a>
        </header>
    )
}