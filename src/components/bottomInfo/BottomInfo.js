import React from 'react';
import '../../App.css';

class BottomInfo extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-container">
                    <div className="container-fluid p-5">
                        <div className="row d-flex align-items-baseline">
                            <div className="col-4">
                                <h2>Hall Of Fame</h2>
                            </div>
                            <div className="col-6">
                                <h2>News</h2>
                            </div>
                            <div className="col-2 d-flex justify-content-around">
                                <div className="text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                                         className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                                         className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <table className="table table-borderless text-white">
                                        <thead>
                                        <tr className="border border-0 border-bottom border-secondary">
                                            <th scope="col">Top Reviewers</th>
                                            <th scope="col"
                                                className="text-muted border border-0 border-bottom border-danger">See
                                                All
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Excellence</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Kamena</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Samtam...</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-borderless text-white">
                                        <thead>
                                        <tr className="border border-0 border-bottom border-secondary">
                                            <th scope="col">Top Random</th>
                                            <th scope="col"
                                                className="text-muted border border-0 border-bottom border-danger">See
                                                All
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Excellence</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Kamena</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="d-flex align-items-baseline justify-content-start">
                                                <div className="me-2">
                                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profil-img"
                                                         className="img-fluid rounded-circle img-profil"/>
                                                </div>
                                                <small>Samtam...</small>
                                            </td>
                                            <td className="py-3">
                                                <div className="d-flex justify-content-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-success rounded-pill">2713
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-8 my-4">
                                    <div className="card p-4 bg-dark">
                                        <div className="row">
                                            <div className="col-7">
                                                <img src="https://images.pexels.com/photos/2555635/pexels-photo-2555635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="great-poster"
                                                     className="img-fluid img-card rounded"/>
                                            </div>
                                            <div className="col-5">
                                                <small className="small-text">2 Hours Ago - <span
                                                    className="fst-italic">by Yoga</span></small>
                                                <h6 className="color-small-text">'Suicide Squad' Is a Hit, But DC Needs to
                                                    Start Making Better Movies</h6>
                                                <p><small className="middel-text">There's an old adage that applies to
                                                    the dilemma DC comics currently faces. You can fool all the people
                                                    some of the time and some of the people all the time, but you cannot
                                                    fool all the people all the time.</small></p>
                                                <p><small className="middel-text">In the case fo "Batman v Superman:
                                                    Dawn of justice" and now "Suicide Squad," it can be argued that DC
                                                    and Warner Bros</small></p>
                                                <div>
                                                    <button
                                                        className="btn text-white border-0 border-bottom rounded-0 border-danger">Read
                                                        Full Article
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-4">
                                                <div className="card border border-0">
                                                    <img src="https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                                                         className="card-img img-poster"/>
                                                </div>
                                                <div className="my-3">
                                                    <small className="small-text">2 Hours Ago - <span
                                                        className="fst-italic">by Yoga</span></small>
                                                    <h4 className="lead color-small-text">Brie Larson Is Already
                                                        Getting Into Character For Captain Marvel, Check It Out</h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="card border border-0">
                                                    <img src="https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                                                         className="card-img img-poster"/>
                                                </div>
                                                <div className="my-3">
                                                    <small className="small-text">2 Hours Ago - <span
                                                        className="fst-italic">by Yoga</span></small>
                                                    <h4 className="lead color-small-text">Brie Larson Is Already
                                                        Getting Into Character For Captain Marvel, Check It Out</h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="card border border-0">
                                                    <img src="https://images.pexels.com/photos/7947959/pexels-photo-7947959.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                                                         className="card-img img-poster"/>
                                                </div>
                                                <div className="my-3">
                                                    <small className="small-text">2 Hours Ago - <span
                                                        className="fst-italic">by Yoga</span></small>
                                                    <h4 className="lead color-small-text">Brie Larson Is Already
                                                        Getting Into Character For Captain Marvel, Check It Out</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BottomInfo;