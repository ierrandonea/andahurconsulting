import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-fluid bg-dark text-white">
                <div className="row my-5 px-3">
                    <div className="col-11 col-md-10">
                        <h3 className="mt-5 text-danger">404!</h3>
                    </div>
                </div>
                <hr className="my-5" />
            </div>
    )
}

export default NotFound;