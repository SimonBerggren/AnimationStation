import * as React from 'react';
import { Link } from 'gatsby';

import * as style from './navbar.module.css';

const Navbar = ({ onLinkClick }) => {
    return (
        <nav>
            <ul className={style.links}>
                <li className={style.linkItem}>
                    <Link to='/' className={style.linkText} onClick={onLinkClick}>
                        Home
                    </Link>
                </li>
                <li className={style.linkItem}>
                    <Link to='/about' className={style.linkText} onClick={onLinkClick}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;