import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/Navbar';
import Header from './Components/Header/Header';
import Electronics from './Components/NavBarComp/Electronics';
import Fashion from './Components/NavBarComp/Fashion';
import Furniture from './Components/NavBarComp/Furniture';
import Grocery from './Components/NavBarComp/Grocery';
import Mobiles from './Components/NavBarComp/Mobiles';
import Home from './Components/Home/Home';
import TopOffers from './Components/NavBarComp/TopOffers';
import Appliances from './Components/NavBarComp/Appliances';
import Travel from './Components/NavBarComp/Travel';
import Toys from './Components/NavBarComp/Toys';
import MotorCycle from './Components/NavBarComp/MotorCycle';
import TotalApiData from './Components/NavBarComp/TotalApiData';
import Seller from './Components/NavBarComp/Seller';
import Signup from './Components/NavBarComp/Signup';
import Login from './Components/NavBarComp/Login';
import Cart from './Components/NavBarComp/Cart';
import GenerateBill from './Components/NavBarComp/GenerateBill';
import { BrowserRouter as Router, Routes, 
  Route,Navigate} from "react-router-dom";




function App() {
  return (
    <div>


      {/* Routes */}

      <Router>
        <NavBar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/elctronics" element={<Electronics />} />
          <Route exact path="/fashion" element={<Fashion />} />
          <Route exact path="/furniture" element={<Furniture />} />
          <Route exact path="/mobile" element={<Mobiles />} />
          <Route exact path="/grocery" element={<Grocery />} />
          <Route exact path="/offers" element={<TopOffers />} />
          <Route exact path="/appliances" element={<Appliances />} />
          <Route exact path="/travel" element={<Travel />} />
          <Route exact path="/toys" element={<Toys />} />
          <Route exact path="/motorcycle" element={<MotorCycle />} />
          <Route exact path="/totalData" element={<TotalApiData />} />
          <Route exact path="/seller" element={<Seller />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/bill" element={<GenerateBill />} />

          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </Router>


    </div>
  );
}

export default App;
