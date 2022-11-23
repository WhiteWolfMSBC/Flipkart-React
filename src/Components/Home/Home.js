import React from 'react'
import Carousel from '../Carousel/Carousel';
import Product from '../Product-Card/Product';
import Footer from '../Footer/Footer';
import Footer1 from '../Footer/Footer1';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>

<Helmet>
        <title>Online Shopping Site for Mobiles , Electronics , Furniture , Fashion and Grocery | Flipkart.com</title>
      </Helmet>

      <Carousel />
      <Product />
      <Footer />
      <Footer1 />

    </div>
  )
}

export default Home
