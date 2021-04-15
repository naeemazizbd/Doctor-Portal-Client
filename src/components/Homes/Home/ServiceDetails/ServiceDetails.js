import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 ">
            <div className="card">
            <div className={`d-flex justify-content-center  info-${service.background}`}>
                <div className="m-3">
                    <FontAwesomeIcon className="info-icon text-danger" icon={service.img}></FontAwesomeIcon>
                </div>
            </div>

            <div className="text-center">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
            </div>
            </div>

        </div>
    );
};

export default ServiceDetails;