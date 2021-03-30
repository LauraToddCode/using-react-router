import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/products">
                <li>Products</li>
            </Link>
            <Link to="/contact">
                <li>Contact</li>
            </Link>
        </ul>
    )
}

export default Navbar;