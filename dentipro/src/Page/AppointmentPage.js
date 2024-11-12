import React from 'react'
import Appointment from '../Componets/Appointment';
import Newsletter from '../Componets/Newsletter';

const AppointmentPage = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div class="container-fluid bg-primary py-5 hero-header mb-5">
                <div class="row py-3">
                    <div class="col-12 text-center">
                        <h1 class="display-3 text-white animated zoomIn">Appointment</h1>
                        <a href="Home" class="h4 text-white">Home</a>
                        <i class="far fa-circle text-white px-2"></i>
                        <a href="Appointment" class="h4 text-white">Appointment</a>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <Appointment />
            <Newsletter />
        </>
    )
}
export default AppointmentPage;