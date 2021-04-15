import React from 'react';
import  './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <div className="Make-Appointment mt-5">
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-5  ">
                        <img src="https://pngimage.net/wp-content/uploads/2018/05/doctor-woman-png-5.png" alt=""/>
                    </div>
                    <div className="col-md-7  p-4 ">
                        <h5 className="text-danger fw-bold text-uppercase ">Appointment</h5>
                        <div className="text-white">
                        <h1 className="my-4">Make an Appointment  Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>

                        </div>
                        <button className="btn btn-danger px-4">Learn More</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;