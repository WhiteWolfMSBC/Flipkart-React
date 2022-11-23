import React, { useState } from 'react'
import GroceryApi from '../Json/Grocery.json'
import Footer from '../Footer/Footer';
import Footer1 from '../Footer/Footer1';
import { Helmet } from 'react-helmet';


function Grocery() {

  const [data] = useState(GroceryApi);

  return (
    <div className="container-fluid">

      <Helmet>
        <title>Flipkart | Grocery</title>
      </Helmet>

      {/* Carousel */}

      <div className="container-xl container-lg container-md container-sm container-xs">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../Images/37.png")}
                className="d-block w-100"
                height="203px"
                alt="Img 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../Images/38.png")}
                className="d-block w-100"
                height="203px"
                alt="Img 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../Images/39.png")}
                className="d-block w-100"
                height="203px"
                alt="Img 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      {/* Product Card */}

      <div className="Product-Card container-xl container-lg container-md container-sm container-xs mt-5">
        <div className="Product-card row">
          {data.map((comm) => (
            <div className="card" style={{ width: "19rem" }}>
              <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-danger"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>

              <img
                src={comm.img}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">{comm.title}</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  {comm.desc}
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      {comm.rating}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-jewish-star text-light ms-1"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6z"></path>
                      </svg>
                    </p>
                  </div>

                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <span className="card-text text-secondary fs-6 fw-semibold">
                      (269)
                    </span>
                  </div>

                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <span className="card-text">
                      <img
                        src={require("../Images/19.png")}
                        className="card-img-top"
                        alt="..."
                      />
                    </span>
                  </div>

                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12"></div>
                </div>

                <p className="card-text text-dark fs-6 fw-semibold">
                  {comm.price}
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    {comm.price}
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    5% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Upto <span className="fw-bold">₹1,000</span> Off on Exchange
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <Footer />
      <Footer1 />



    </div>
  )
}

export default Grocery
