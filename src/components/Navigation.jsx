function Navigation({ currentPage, handlePageChange }) {
    return (
        <div id="nav" className="hero is-halfheight-with-navbar herobackground">

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
                            <li>
                                <a href="#projects"
                                    // current page check
                                    className={currentPage === 'Projects' ? 'navlink active' : 'navlink'}
                                    // when tab is clicked, page changes
                                    onClick={() => handlePageChange('Projects')}>
                                    PROJECTS
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    className={currentPage === 'About' ? 'navlink active' : 'navlink'}
                                    // when tab is clicked, page changes
                                    onClick={() => handlePageChange('About')}>
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a href="#resume"
                                    className={currentPage === 'Resume' ? 'navlink active' : 'navlink'}
                                    // when tab is clicked, page changes
                                    onClick={() => handlePageChange('Resume')}>
                                    RESUME
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className={currentPage === 'Contact' ? 'navlink active' : 'navlink'}
                                    // when tab is clicked, page changes
                                    onClick={() => handlePageChange('Contact')}>
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navigation;