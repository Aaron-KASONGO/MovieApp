import React from 'react';

class SearchNav extends React.Component {

    render() {
        return (
            <>
                <div className="navbar navbar-expand-lg navbar-dark police">
                    <div className="container py-3">
                        <a href="#" className="navbar-brand">Company</a>
                        <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseNav">
                            <span className="navbar-toggler-icon"></span>
                        </div>
                        <div className="navbar-collapse collapse" id="collapseNav">
                            <div className="ms-5"></div>
                            <ul className="navbar-nav d-flex mx-auto">
                                <li className="nav-item mx-lg-3"><a href="#" className="nav-link text-white">Random</a>
                                </li>
                                <li className="nav-item mx-lg-3"><a href="#" className="nav-link text-white">Popular</a>
                                </li>
                                <li className="nav-item mx-lg-3"><a href="#" className="nav-link text-white">Recent</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <form action="get">
                                        <label htmlFor="id_search"></label><input
                                        className="form-control bg-transparent text-white border border-0 border-start rounded-0 border-secondary"
                                        type="search" name="search" id="id_search"
                                        placeholder="Search something here ..." />
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchNav;
