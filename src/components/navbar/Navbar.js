import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <>
                <div className="navbar navbar-expand-lg navbar-dark police">
                    <div className="container-fluid mx-5 border border-0 border-bottom py-5 border-secondary">
                        <a href="./Navbar#" className="navbar-brand">Company</a>
                        <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapse">
                            <span className="navbar-toggler-icon"></span>
                        </div>
                        <div className="navbar-collapse collapse" id="collapse">
                            <div className="mx-auto"></div>
                            <ul className="navbar-nav d-flex align-items-baseline">
                                <li className="nav-item mx-lg-3"><a href="./Navbar#" className="nav-link text-white">Home</a>
                                </li>
                                <li className="nav-item mx-lg-3"><a href="./Navbar#" className="nav-link text-white">About</a>
                                </li>
                                <li className="nav-item mx-lg-3"><a href="./Navbar#" className="nav-link text-white">News</a>
                                </li>
                                <li className="nav-item mx-lg-3"><a href="./Navbar#"
                                                                    className="nav-link text-white">Discover</a></li>
                                <li className="nav-item mx-lg-3"><a href="./Navbar#"
                                                                    className="nav-link text-white">Community</a></li>
                                <li className="nav-item mx-auto">
                                    <a href="./Navbar#" className="nav-link">
                                        <button className="btn btn-lg bg-red rounded-pill text-white"><small>Login or
                                            Register</small></button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;