import React from 'react';

class CardSection extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid pb-5 bg-blue-dark">
                    <div className="container-fluid p-5">
                        <div className="row g-5">
                            <div className="col-3">
                                <div className="card border border-0">
                                    <img src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="show" className="card-img img-card"/>
                                        <span
                                            className="badge top-100 start-100 bg-warning position-absolute translate-middle rounded-pill py-2 px-3 text-black-50">7.2</span>
                                </div>
                                <div className="my-3">
                                    <small className="color-small-text">2015 / Fiction, Drama</small>
                                    <h4 className="lead">Paper Towns</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-lg rounded-pill px-4 text-white bg-red"><small>Discover More</small>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default CardSection;