import React from 'react'
import { Link } from 'react-router-dom';
import Footer1 from '../Footer/Footer1';
import {HeadTitle} from '../Util/Title'

function Signup() {

  HeadTitle('Flipkart | Sign-Up')

  return (
    <div className='container-fluid'>





      <div className="container-fluid mt-4">
      <div className="container-xl container-lg container-md container-sm container-xs">
            <div className="Product-card row">
                <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
                <div className="col-xl-8 col-lg-5 col-md-2 col-sm-1 col-xs-12">
                <div className="row">
          <div className="col-xl-5 col-lg-3 col-md-2 col-sm-1 col-xs-12">
            <img src={require("../Images/53.png")} alt="" />
          </div>

          <div className="col-xl-7 col-lg-5 col-md-2 col-sm-1 col-xs-12 mt-5">

          <div class="form-floating mb-3 mt-3">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
                  <label for="floatingInput">Enter Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="tel" class="form-control" id="floatingPassword" placeholder="Contact"/>
                  <label for="floatingPassword">Mobile No.</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Enter Email Id</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="[password]" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Enter Password</label>
                </div>

                  <p className='fw-semibold fs-6 text-end'>
                  <Link className='text-danger' to="/login">Existing User? Login</Link>
                  </p>


                  <button className="btn btn-outline-danger text-light form-control mt-3">
              Sign-Up
            </button>

          </div>
        </div>
                </div>
                <div className="col-xl-2 col-lg-1 col-md-1 col-sm-12 col-xs-12"></div>
            </div>
      </div>
    </div>



<Footer1/>
 
    </div>


































  )
}

export default Signup
