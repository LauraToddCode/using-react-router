import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    )
}

export default Navbar;