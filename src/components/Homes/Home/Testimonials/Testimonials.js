import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'
const Testimonials = () => {
    const testimonialData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : 'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img :'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : 'https://i.ibb.co/6WfSb7H/20201013-085356.png'
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-danger text-uppercase">Testimonial</h5>
                   <h1>What Our Patients Says </h1>
               </div>
               <div className="card-deck row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;