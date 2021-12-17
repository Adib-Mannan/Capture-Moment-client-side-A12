import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <br />
            <h2 className='mt-4'>Get Your Product</h2>
            <Products></Products>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;