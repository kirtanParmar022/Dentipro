import React from 'react'

const Newsletter = () => {
    return (
        <>
            {/* <!-- Newsletter Start --> */}
            <div class="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: "1" }}>
                <div class="container">
                    <div class="bg-primary p-5">
                        <form class="mx-auto" style={{ maxWidth: "600px" }}>
                            <div class="input-group">
                                <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                                <button class="btn btn-dark px-4">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}
        </>
    )
}
export default Newsletter;
