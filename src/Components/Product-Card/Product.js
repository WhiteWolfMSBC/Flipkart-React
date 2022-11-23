import React from "react";

function Product() {
  return (
    <div className="container-fluid mt-5">
      <div className="Product-Card container-xl container-lg container-md container-sm container-xs">
        {/* Product card 1 */}

        <div className="Product-card row">
          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>

              <img
                src={require("../Images/20.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/20.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">APPLE iPhone 14 Pro Max</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Deep Purple,1TB
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.7
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
                  ₹1,89,900
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹1,95,999
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
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <div className="card" style={{ width: "19rem" }}>
            <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-secondary"
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
                src={require("../Images/18.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/18.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Sony ZV-E10L</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Space Black,512GB
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.4
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
                      (131)
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
                  ₹62,990
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹69,990
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    10% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Upto <span className="fw-bold">₹10,000</span> Off on Exchange
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/22.png")}
                className="card-img-top"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/22.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">APPLE MagSafe Wireless Power</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  White,Lithium-ion
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      3.8
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
                      (178)
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
                  ₹10,900
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹12,999
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    8% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                  <span className="fw-bold text-success ms-5">Bank Offer</span>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <div className="card" style={{ width: "19rem" }}>
            <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-secondary"
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
                src={require("../Images/21.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/21.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Hp Laser JetPro MFpM126a Printer</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Black,Toner Cartridge
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.3
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
                      (3,813)
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
                  ₹18299
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹21090
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    13% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Upto <span className="fw-bold">₹1,000</span> Off on Exchange
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>





        {/* Product card 2 */}

        <div className="Product-card1 row mt-5">
          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/23.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/23.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">PUMA English Willow Bat</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  700-1200 g
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4
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
                      (4)
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
                  ₹4,049
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹7,999
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    45% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                  <span className="fw-bold text-success ms-5">Bank Offer</span>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <div className="card" style={{ width: "19rem" }}>
            <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-secondary"
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
                src={require("../Images/24.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/24.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">HAUSER XO Ball Pen</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Pack of 50, Blue, Balck & Red
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.5
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
                      (477)
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
                  ₹409
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹500
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    18% off
                  </span>
                </p>
                <p className="card-text text-success fs-6 fw-bold">
                  Buy 2 items, save extra 5%
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/25.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/25.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">IGNYTE IGN-4 Trever ISI Helmet</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Matt Titanium Grey with Visor
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      3.8
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
                      (12)
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
                  ₹4,511
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹4,749
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    5% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                  <span className="fw-bold text-success ms-5">Bank Offer</span>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/26.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/26.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">RVL-38C-LGP-3TS Acoustic Guitar</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Brown
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.1
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
                      (5,913)
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
                  ₹7,999
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹9,999
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    25% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>



        {/* Product card 3 */}

        <div className="Product-card2 row mt-5 mb-5">
          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/27.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/27.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">PUMA Sweatshirt</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Size XS, S, M, L, XL, XXL, 3XL
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.2
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
                      (999)
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
                  ₹6,799
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹7,999
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    15% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                  <span className="fw-bold text-success ms-5">Bank Offer</span>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <div className="card" style={{ width: "19rem" }}>
            <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-secondary"
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
                src={require("../Images/28.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/28.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">LEVI'S Men Blue Jeans</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Size 30 , 32 , 34 ,36 ,38 , 40
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.0
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
                      (50)
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
                  ₹7,500
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹15,000
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    50% off
                  </span>
                </p>
                <p class="Card-color card-text">
                  <p className="card-text Card_Txt fw-bold">New Arrivals</p>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
            <div className="card" style={{ width: "19rem" }}>
            <div className="row">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart text-secondary"
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
                src={require("../Images/29.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/29.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">NIKE Running Shoes For Men</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Size 8 ,9 , 10 , 11
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      4.8
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
                      (10)
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
                  ₹16,995
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹18,995
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    20% off
                  </span>
                </p>
                <p class="Card-color card-text">
                  <p className="card-text Card_Txt fw-bold">New Arrivals</p>
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
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
                    fill="red"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <img
                src={require("../Images/30.png")}
                className="card-img-top mt-2"
                width="302px"
                height="437px"
                data-action="zoom"
                data-original={require("../Images/30.png")}
                style={{ width: "100%" }}
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">TOMMY HILFIGER Men Regular Shirt</h6>
                <p className="card-text text-secondary fs-6 fw-semibold">
                  Size S, M, L, XL, XXL
                </p>

                <div className="row">
                  <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                    <p
                      class="badge bg-success text-wrap"
                      style={{ width: "3rem" }}
                    >
                      3.5
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
                      (486)
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
                  ₹5,599
                  <span className="card-text text-secondary fs-6 fw-semibold text-decoration-line-through ms-2">
                    ₹7,599
                  </span>
                  <span className="card-text text-success fs-6 fw-semibold ms-2">
                    15% off
                  </span>
                </p>
                <p className="card-text text-dark fs-6 fw-semibold">
                  Free Delivery
                </p>

                <button className="btn btn-primary mt-2">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
