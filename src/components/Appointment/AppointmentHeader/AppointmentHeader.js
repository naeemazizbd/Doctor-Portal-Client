import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = (handleDateChange) => {
    
    return (
        <main >
            <div className="row d-flex align-items-center " Style={{ height: '600px' }} >
                <div className="col-md-6 my-3 px-5  ">
                    <h2 className="">Appointment</h2>
                    <div className="d-flex justify-content-end">

                        <Calendar className="p-3"
                            onChange={handleDateChange}
                            value={new Date()}
                        />

                    </div>



                </div>
                <div className="col-md-6 my-3  px-5">
                    <img className="img-fluid" src="https://cdn.dribbble.com/users/1973278/screenshots/6998323/hospital.gif" alt="" />
                </div>
            </div>

        </main>
    );
};

export default AppointmentHeader;