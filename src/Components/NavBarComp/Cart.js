import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MobileApi from "../Json/Mobile.json";
import ElectronicsApi from "../Json/Electronics.json";
import { Link } from "react-router-dom";

function Cart() {
  const [data] = useState(MobileApi);
  const [elcdata] = useState(ElectronicsApi);

  return (
    <div className="container-fluid">
      <Helmet>
        <title>Flipkart | Cart</title>
      </Helmet>

      <div className="container-xl container-lg container-md container-sm conatiner-xs">
        {/* navBar */}

        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item text-start">
                <a
                  class="nav-link active text-white fs-4 fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  My cart
                </a>
              </li>
            </ul>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
          </div>
        </nav>

        <div className="row mt-3">
          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-12 col-xs-12 text-start">
            <p className="fs-5 fw-semibold text-secondary">
              From Saved Addresses
            </p>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-12 col-xs-12 text-end">
            <button className="btn btn-outline-secondary fw-semibold px-5">
              Enter Delivery PinCode
            </button>
          </div>
        </div>

        <hr className="text-secondary mt-3 mb-3" />

        {/* Card */}

        <div className="container-fluid">
          <div className="Product-card row">
            <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12"></div>

            <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12 ms-5">
              {data.map((comm) => (
                <div class="Product-card card mb-3" style={{ width: "540px" }}>
                  <div class="row g-0">
                    <div class="col-md-4 mt-5">
                      <img
                        src={comm.img}
                        class="img-fluid rounded-start"
                        width="150px"
                        height="150px"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
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

                        <p className="card-text text-success fs-6 fw-semibold">
                          2 Offers applied{" "}
                          <span className="fw-bold fs-2 ms-2">.</span>{" "}
                          <span>1 Offer available</span>
                        </p>

                        <p className="card-text text-secondary fs-6 fw-semibold">
                          Delivery in 2 days, Fri |{" "}
                          <span className="text-success">Free Delivery</span>
                          <span className="text-decoration-line-through ms-2">
                            ₹40
                          </span>
                        </p>
                      </div>
                      <div class="card-footer">
                        <div className="row mt-3 mb-4">
                          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
                            <button className="btn btn-outline-secondary px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-edit"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                              </svg>
                              Edit
                            </button>
                          </div>

                          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
                            <button className="btn btn-outline-secondary px-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-trash text-secondary"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                              </svg>
                              Delete
                            </button>
                          </div>
                        </div>

                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12"></div>

            <hr className="mt-3 mb-3 text-secondary" />

            <div className="row mt-3">
              <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
              <div className="col-xl-8 col-lg-5 col-md-3 col-sm-1 col-xs-12">
                <div className="Product-card container text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shield-check text-light text-center"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#9FA6B2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
                  </svg>

                  <span className="text-secondary text-start fs-5 fw-semibold ms-2">
                    Safe and secure payments.East returns 100% <br /> Authantic
                    Product
                  </span>
                </div>

                <div className="row mt-5">
                  <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
                    <p className="text-muted text-decoration-line-through text-start ms-2 fs-6">
                      ₹7999 <br />
                      <span className="text-dark fw-semibold text-start fs-6">
                        ₹6999
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-info-circle text-secondary ms-2"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        <polyline points="11 12 12 12 12 16 13 16"></polyline>
                      </svg>
                    </p>
                  </div>

                  <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
                    <button className="btn btn-danger px-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-clipboard-list"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                        <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                        <line x1="9" y1="12" x2="9.01" y2="12"></line>
                        <line x1="13" y1="12" x2="15" y2="12"></line>
                        <line x1="9" y1="16" x2="9.01" y2="16"></line>
                        <line x1="13" y1="16" x2="15" y2="16"></line>
                      </svg>
                      Place Order
                    </button>
                  </div>

                  <div className="container text-center">
                    <Link to="/bill">
                      <button className="btn btn-primary px-5 mt-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-receipt"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2"></path>
                        </svg>
                        Generate Bill
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
            </div>

            <hr className="text-center mt-5 mb-5" />

            {/* Card */}

            <div className="row">
              <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12"></div>

              <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12 ms-5">
                <p className="text-secondary fs-4 fw-semibold text-start mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-square-plus me-2"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <line x1="9" y1="12" x2="15" y2="12"></line>
                    <line x1="12" y1="9" x2="12" y2="15"></line>
                  </svg>
                  Saved for later(5)
                </p>

                {elcdata.map((comm) => (
                  <div
                    class="Product-card card mb-3"
                    style={{ width: "540px" }}
                  >
                    <div class="row g-0">
                      <div class="col-md-8">
                        <div class="card-body">
                          <h6 className="card-title">{comm.title}</h6>

                          <div className="row mb-5">
                            <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                              <span className="card-text">
                                <img
                                  src={require("../Images/19.png")}
                                  className="card-img-top"
                                  alt="..."
                                />
                              </span>
                            </div>
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
                        </div>
                        <div class="card-footer mt-4">
                          <div className="row mt-3 mb-4">
                            <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
                              <button className="btn btn-outline-secondary px-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-shopping-cart text-secondary"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <circle cx="6" cy="19" r="2"></circle>
                                  <circle cx="17" cy="19" r="2"></circle>
                                  <path d="M17 17h-11v-14h-2"></path>
                                  <path d="M6 5l14 1l-1 7h-13"></path>
                                </svg>
                                Move to Cart
                              </button>
                            </div>

                            <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
                              <button className="btn btn-outline-secondary px-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="icon icon-tabler icon-tabler-trash text-secondary"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                  ></path>
                                  <line x1="4" y1="7" x2="20" y2="7"></line>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mt-4">
                        <img
                          src={comm.img}
                          class="img-fluid rounded-start"
                          width="100px"
                          height="100px"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-4-xl col-lg-3 col-md-2 col-sm-1 col-xs-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
