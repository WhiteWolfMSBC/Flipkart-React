import React from "react";
import { Link } from 'react-router-dom';
import Footer1 from '../Footer/Footer1';
import { Helmet } from 'react-helmet';

function Login() {
  return (
    <div className="container-fluid mt-4">

      <Helmet>
        <title>Flipkart | Login</title>
      </Helmet>


      <div className="container-xl container-lg container-md container-sm container-xs mt-5">

        <div className="Product-card row">
          <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
          <div className="col-xl-8 col-lg-5 col-md-2 col-sm-1 col-xs-12">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-xs-12">
                <img src={require("../Images/52.png")} alt="" />
              </div>

              <div className="col-xl-8 col-lg-5 col-md-2 col-sm-1 col-xs-12 mt-5">
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

                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <span className="text-primary">
                    <a href="https://www.flipkart.com/pages/terms">Terms of Use</a>
                  </span>{" "}
                  and
                  <span className="text-primary ms-1">
                    <a href="https://www.flipkart.com/pages/privacypolicy">
                      Privacy Policy
                    </a>
                  </span>
                  .
                </p>

                <button className="btn btn-outline-danger text-light form-control mt-3">
                  Login
                </button>

                <p className="text-secondary text-center mt-3">OR</p>

                <div className="Product-card mt-3 mb-5">
                  <p className="text-primary fs-5 text-center fw-semibold mt-2 mb-5">
                    Request Otp
                  </p>
                </div>

                <p className="mt-5 text-center text-primary fs-6 fw-semibold">
                  <Link className="text-primary" to="/signup"> New to Flipkart? Create an account</Link>
                </p>


              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

export default Login;
