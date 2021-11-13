import React, { useState, Fragment } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import classes from './Burger.module.css';

const Burger = () => {
    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(prevState => !prevState);
    }

    return (
        <Fragment>
            <div className={classes.text}>
                <div className={classes.burgerMenu}>
                    {menu ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={toggleMenu}>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={toggleMenu}>
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg>}


                    {!menu && <nav className={classes.menu}>
                        <ul>
                            <li>
                                <NavHashLink
                                    to="/#top"
                                    smooth
                                >Home</NavHashLink>
                            </li>
                            <li><NavHashLink
                                to="/#about"
                                smooth>About </NavHashLink></li>
                            <li>
                                <NavHashLink to="#contact"
                                    smooth>
                                    Contact</NavHashLink></li>
                            <li>
                                <NavHashLink to="#skills"
                                    smooth>
                                    Skills</NavHashLink></li>
                            <li>
                                <NavHashLink to="#projects"
                                    smooth>
                                    Projects</NavHashLink></li>
                        </ul>
                    </nav>}
                </div>
            </div>
        </Fragment>
    )
}

export default Burger

