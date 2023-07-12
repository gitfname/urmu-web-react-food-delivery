
import { Link } from "react-router-dom"
import { MobileMenu } from "../MobileMenu"

function NavBar() {
    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 h-full">

            <Link to="/">Logo</Link>

            <div className="flex items-center gap-x-3 lg-max:hidden">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="lg:hidden">
                <MobileMenu />
            </div>

        </div>
    )
}

export default NavBar