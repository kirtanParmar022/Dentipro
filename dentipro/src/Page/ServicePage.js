import React from 'react'
import Service from '../Componets/Service'
import Newsletter from '../Componets/Newsletter'

const ServicePage = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div class="container-fluid bg-primary py-5 hero-header mb-5">
                <div class="row py-3">
                    <div class="col-12 text-center">
                        <h1 class="display-3 text-white animated zoomIn">Services</h1>
                        <a href="Home" class="h4 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="Service" class="h4 text-white">Services</a>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <Service />
            <Newsletter />

        </>
    )
}
export default ServicePage