import React from 'react'

function Carousel() {
    return (
        <div className='container-fluid'>

            <div id="carouselExampleControls" className="carousel slide container-xl container-lg container-md container-sm container-xs" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../Images/12.png")} width="680px" height="308px" className="d-block w-100" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/13.jpg")} width="680px" height="308px" className="d-block w-100" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/14.png")} width="680px" height="308px" className="d-block w-100" alt="Image 3" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/15.jpg")} width="680px" height="308px" className="d-block w-100" alt="Image 4" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/16.jpg")} width="680px" height="308px" className="d-block w-100" alt="Image 5" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../Images/17.jpg")} width="680px" height="308px" className="d-block w-100" alt="Image 6" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Carousel
