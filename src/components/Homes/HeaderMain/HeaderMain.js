import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
       <main >
           <div className="row d-flex align-items-center " Style={{height:'600px'}} >
               <div className="col-md-6 my-3 px-5  ">
                   <h1 className="display-2">“A doctor can teach how to love life.” </h1>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo voluptatum esse. Cumque dolorem eveniet, rem consectetur nemo voluptatem repellat quo alias enim soluta. Quo dolores commodi illum modi distinctio!</p>
                   
                   <div className="d-flex justify-content-end">
                       <Link to="/appointment"><button className="btn btn-danger px-4">Book Appointment Now</button>
</Link>
                   </div>
                   
                   

               </div>
               <div className="col-md-6 my-3  px-5">
                   <img className="img-fluid" src="https://cdn.dribbble.com/users/1973278/screenshots/6998323/hospital.gif" alt=""/>
               </div>
           </div>

       </main>
    );
};

export default HeaderMain;