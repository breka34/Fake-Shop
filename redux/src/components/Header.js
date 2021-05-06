import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="menu">
                <h2>Fake shop</h2>
            </div>
            <span>
                <Link to="/cart">Cart</Link>
            </span>
        </header>
    )
}

export default Header
