// import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <header id="nav" className="hero is-halfheight-with-navbar herobackground">

            {/* Hero Centered */}
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="victoriatitle">
                        Victoria McNorrill
                    </p>
                    <p className="victoriasubtitle">
                        FULL STACK WEB DEVELOPER
                    </p>
                </div>
            </div>


            {/* Hero footer: will stick at the bottom */}
            <div className="hero-foot">
                <nav className="tabs is-boxed navtabs">
                    <div className="container">
                        <ul>
                            <NavLink
                            to="/Projects"
                            className={({ isActive }) => isActive ? "active" : "navlink"}>
                            <li>PROJECTS</li>
                            </NavLink>
                        
                            <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active" : "navlink"}>
                            <li>ABOUT</li> 
                            </NavLink>

                        
                            <NavLink 
                            to="/Resume"
                            className={({ isActive }) => isActive ? "active" : "navlink"}>
                            <li>RESUME</li>
                            </NavLink>

                            <NavLink
                            to="/Contact"
                            className={({ isActive }) => isActive ? "active" : "navlink"}>
                            <li>CONTACT</li>
                            </NavLink>

                        </ul>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Navigation;