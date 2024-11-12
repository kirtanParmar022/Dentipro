import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../img/Logo.png'

const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <div>
                    <img src={ Logo} alt='' className='p-0 m-0 logo-img'  />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to="/Home" class="nav-item nav-link ">Home</Link>
                        <Link to="/Appointment" class="nav-item nav-link">Appointment</Link>
                        <Link to="/Service" class="nav-item nav-link">Service</Link>
                        <Link to="/Contact" class="nav-item nav-link">Contact</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                    </div>
                    <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
                    <Link to="/appointment" class="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}
export default Navbar;