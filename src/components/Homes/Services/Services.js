import React from 'react';
import {  faUserMd,faClinicMedical,faAmbulance} from '@fortawesome/free-solid-svg-icons'

import ServiceDetails from '../Home/ServiceDetails/ServiceDetails';

const Services = () => {

    const serviceData = [
        {
            name: 'Doctor Chamber Visit',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: faUserMd,
        },
        {
            name: 'Home Medical Service',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img: faClinicMedical,
        },
        {
            name: 'Ambulance Service',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus iste asperiores, ut quos vel vitae rerum voluptas quam facilis architecto.',
            img:  faAmbulance,
        }
    ]
    return (
        <section>
            <div className="text-center m-5">
                <h5 className="text-danger">OUR SERVICES </h5>
                <h2 className="">We Provide This Service</h2>

            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row  ">
                {
                    serviceData.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;