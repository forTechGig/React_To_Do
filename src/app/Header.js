import React from "react";
import { Link } from 'react-router-dom'


const Header = () => (
    <header>
        <nav>
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/addon">Add Item </Link></li>
            <li><Link to="/component">Component </Link></li>
        </ul>
     </nav>
    </header>
)

export default Header