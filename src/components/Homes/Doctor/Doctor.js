import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = () => {
    return (
        <div className="col-md-4 text-center ">
            <div className=" bg-light m-2 rounded">
            <img className="img-fluid mb-3" src="https://pngimage.net/wp-content/uploads/2018/05/doctor-woman-png-5.png" alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-danger" icon={faPhoneAlt}/> +880-188-934789</p>
            </div>
        </div>
    );
};

export default Doctor;