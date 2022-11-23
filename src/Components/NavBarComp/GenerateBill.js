import React from "react";
import Footer1 from "../Footer/Footer1";
import { Helmet } from "react-helmet";

function GenerateBill() {
  return (
    <div>
      <Helmet>
        <title>Flipkart | Login</title>
      </Helmet>

      <div className="Product-card  container-xl container-lg container-md container-sm container-xs mb-3 mt-3">
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active fs-4 fw-semibold text-light"
                  aria-current="page"
                  href="#"
                >
                  Tax Invoice
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

        <div className="row mt-2">
          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
            <p className="text-dark fs-5 fw-semibold text-start">
              Registered Address:-
            </p>
            <p className="text-secondary fs-6 fw-semibold text-start">
              Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
              Koramangala Industrial Layout, Bangalore KA 560034 IN.
            </p>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
            <p className="text-dark fs-5 fw-semibold text-end">
              Ordered Through <br />
              <img
                src={require("../Images/54.png")}
                width="150px"
                height="80px"
                alt=""
              />
            </p>
          </div>
        </div>

        <hr className="text-secondary mt-1 mb-3" />

        <div className="row mt-2">
          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
            <p className="text-dark fs-5 fw-semibold text-start">
              Sold By Sales India Limited :-
            </p>
            <p className="text-secondary fs-6 fw-semibold text-start">
              Supan, Opp.Dharnidhar Derasar, Near Shreyas Crossing, Vasna,
              Shardanagar Society, Paldi, Ahmedabad, Gujarat, India
            </p>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
            <p className="fs-6 fw-semibold">
              <span className="fs-6 text-dark fw-semibold">GSTIN :</span>
              <span className="fs-6 text-secondary fw-normal">
                06AAXCS0655FIZ2
              </span>{" "}
              <br />
              <span className="fs-6 text-secondary fw-semibold">
                OD115786734599525000
              </span>
              <br />
              <span className="fs-6 text-dark fw-semibold">INVOICE NO :</span>
              <span className="fs-6 text-secondary fw-normal">
                FAAXNJ2001867660
              </span>{" "}
              <br />
              <span className="fs-6 text-dark fw-semibold">DATE :</span>
              <span className="fs-6 text-secondary fw-normal">17-11-2022</span>
            </p>
          </div>
        </div>

        <hr className="text-secondary mt-1 mb-3" />

        <div className="row mt-2">
          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
            <p className="text-dark fs-5 fw-semibold text-start">
              Ph : <span className="text-secondary fs-6">18002089898</span>
            </p>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
            <p className="fs-6 fw-semibold text-dark">
              www.flipkart.com/support
            </p>
          </div>
        </div>

        <hr className="text-secondary mt-1 mb-3" />

        <div className="row mt-2">
          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-start">
            <p className="text-dark fs-5 fw-semibold text-start">
              Shipping Address
            </p>
            <p className="text-secondary fs-6 fw-semibold text-start">
              Postmaster, Post Office AHMEDABAD G.P.O. (G.P.O.), AHMEDABAD,
              GUJARAT (GJ), India (IN), Pin Code:- 380001
            </p>
          </div>

          <div className="col-xl-6 col-lg-4 col-md-2 col-sm-1 col-xs-12 text-end">
            <p className="text-dark fs-5 fw-semibold text-start">
              Billing Address
            </p>
            <p className="text-secondary fs-6 fw-semibold text-start">
              Postmaster, Post Office AHMEDABAD G.P.O. (G.P.O.), AHMEDABAD,
              GUJARAT (GJ), India (IN), Pin Code:- 380001
            </p>
          </div>
        </div>

        <hr className="text-secondary mt-1 mb-3" />

        <div className="container">
          <table class="table table-striped table-hover table-xl table-lg table-md table-sm table-xs ">
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  Product
                </th>
                <th className="text-center" scope="col">
                  Qty
                </th>
                <th className="text-center" scope="col">
                  Price
                </th>
                <th className="text-center" scope="col">
                  IGST
                </th>
                <th className="text-center" scope="col">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-start text-secondary"></td>
                <td className="text-center text-secondary"></td>
                <td className="text-center text-secondary"></td>
                <td className="text-center text-secondary"></td>
                <td className="text-center text-secondary"></td>
              </tr>


              {/* Total */}
              <tr>
                <td className="text-center fw-bolder fs-6">Total</td>
                <td className="text-center fw-semibold fs-6">1</td>
                <td className="text-center fw-semibold fs-6">1145.76</td>
                <td className="text-center fw-semibold fs-6">206.24</td>
                <td className="text-center fw-semibold fs-6">1352</td>
              </tr>
            </tbody>
          </table>
        </div>


       <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-7 col-md-4 col-sm-1 col-xs-12"></div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12">
            <p className="text-end text-secondary fw-semibold fs-6">
              <u>Nitin</u>
            </p>
          </div>

          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-xs-12">
            <p className="text-end text-secondary fw-semibold fs-6">
              Page 1 of 1
            </p>
          </div>
        </div>
       </div>


      </div>

 

      <Footer1 />
    </div>
  );
}

export default GenerateBill;
