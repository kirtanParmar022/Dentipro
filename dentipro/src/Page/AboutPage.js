import React from 'react'
import About from '../Componets/About';
import Newsletter from '../Componets/Newsletter';

const AboutPage = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div class="container-fluid bg-primary py-5 hero-header mb-5">
                <div class="row py-3">
                    <div class="col-12 text-center">
                        <h1 class="display-3 text-white animated zoomIn">About Us</h1>
                        <a href="" class="h4 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="" class="h4 text-white">About</a>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <About />
            <Newsletter />
        </>
    )
}
export default AboutPage;