import React from 'react'
import Img1 from '../img/testimonial-1.jpg'

const Testimonial = () => {
    return (
        <>

            {/* <!-- Testimonial Start --> */}
            {/* <center><h5 className='text-primary text-uppercase'> Our Testimonial </h5> </center> */}
            <div class="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row justify-content-center">
                        <div class="testimonial-item testimonial-carousel text-center text-white col-lg-7 p-5">
                            <img class="img-fluid mx-auto rounded mb-4" src={Img1} alt="" />
                            <p class="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="mx-auto w-25" />
                            <h4 class="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}
        </>
    )
}
export default Testimonial;