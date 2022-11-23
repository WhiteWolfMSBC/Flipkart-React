import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <img
                    src={require("../Images/1.jpg")}
                    width="120px"
                    height="60px"
                    alt=""
                  />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">

                  <input
                    className="form-control ms-4 me-5 mt-2"
                    size="70"
                    type="search"
                    placeholder="Search for product , brands and more"
                    aria-label="Search"
                  />
                </Link>
              </li>

              <li className="nav-item ms-4 mt-2">
                <a className="nav-link" href="#">
                  <button className="btn btn-light text-primary px-4" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">Login</button>
                </a>
              </li>

              {/* Model */}

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div className="row">
                        <div className="col-xl-5 col-lg-3 col-md-1 col-sm-12 col-xs-12">
                          <img src={require("../Images/52.png")} alt="" />
                        </div>

                        <div className="col-xl-7 col-lg-4 col-md-1 col-sm-12 col-xs-12 mt-5">
                          <div class="form-floating mb-3">
                            <input
                              type="email"
                              class="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">Enter Email/Mobile Number</label>
                          </div>
                          <div class="form-floating">
                            <input
                              type="password"
                              class="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                            />
                            <label for="floatingPassword">Enter Password</label>
                          </div>


                          <p className="text-primary text-end mt-2">
                            <a href="">Forgot?</a>
                          </p>

                          <p>By continuing, you agree to Flipkart's <span className="text-primary"><a href="https://www.flipkart.com/pages/terms">Terms of Use</a></span> and
                            <span className="text-primary ms-1"><a href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a></span>.</p>


                          <button className="btn btn-outline-danger text-light form-control mt-3">Login</button>


                          <p className="text-secondary text-center mt-3">OR</p>


                          <div className="Product-card mt-3 mb-5">
                            <p className="text-primary fs-5 text-center fw-semibold mt-2 mb-5">Request Otp</p>
                          </div>



                          <p className="mt-5 text-center text-primary fs-6 fw-semibold">New to Flipkart? Create an account</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>






              <li className="nav-item ms-1 mt-2">
                <Link className="nav-link fs-5 text-light fw-semibold" to="/seller">
                  Become a Seller
                </Link>
              </li>

              <li className="nav-item dropdown ms-1 mt-2">
                <Link
                  className="nav-link fs-5 text-light fw-semibold"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bell text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="#0d6efd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                      </svg>
                      Notification Preferences
                    </a>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-components text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="#0d6efd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 12l3 3l3 -3l-3 -3z"></path>
                        <path d="M15 12l3 3l3 -3l-3 -3z"></path>
                        <path d="M9 6l3 3l3 -3l-3 -3z"></path>
                        <path d="M9 18l3 3l3 -3l-3 -3z"></path>
                      </svg>
                      24x7 Customer Care
                    </Link>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="/totalData">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-ad text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="M7 15v-4a2 2 0 0 1 4 0v4"></path>
                        <line x1="7" y1="13" x2="11" y2="13"></line>
                        <path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5"></path>
                      </svg>
                      Total Data
                    </Link>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-apps text-primary me-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#0d6efd"
                        fill="#0d6efd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                        <line x1="14" y1="7" x2="20" y2="7"></line>
                        <line x1="17" y1="4" x2="17" y2="10"></line>
                      </svg>
                      Download App
                    </Link>
                  </li>
                  <hr className="text-secondary" />
                  <li>
                    <Link className="dropdown-item" to="/login">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login text-primary me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#0d6efd" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
                      </svg>
                      Login
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item ms-1 mt-2">
                <Link className="nav-link fs-5 text-light fw-semibold font-monospace" to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shopping-cart"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#FFFDD0"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="17" cy="19" r="2"></circle>
                    <path d="M17 17h-11v-14h-2"></path>
                    <path d="M6 5l14 1l-1 7h-13"></path>
                  </svg>
                </Link>
              </li>

              <li className="nav-item mt-2">
                <Link className="nav-link fs-5 text-light fw-semibold" to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
