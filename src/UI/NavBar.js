import React, { Fragment } from 'react'
import { AppBar } from '@material-ui/core';
import classes from './NavBar.module.css';
import { NavHashLink } from 'react-router-hash-link';
import Burger from './Burger';

export const NavBar = () => {
    return (
        <Fragment>
            <div className={classes.text}>
                <AppBar className={classes.appBar} style={{ background: '#3B7F8E' }}>
                    <header>
                        <nav className={classes.nav}>
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
                        </nav>
                    </header>
                </AppBar>
            </div>

            <div className={classes.burger}>
                <Burger />
            </div>
        </Fragment>
    )
}
