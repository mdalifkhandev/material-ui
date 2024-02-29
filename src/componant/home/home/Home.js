import React from 'react';
import Navebar from '../naveber/Navebar';
import Granding from '../granding/Granding';
import Brands from '../brands/Brands';
import Servises from '../servises/Servises';
import OurWork from '../ourwork/OurWork';
import Review from '../review/Review';
import Faq from '../faq/Faq';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Granding></Granding>
            <Brands></Brands>
            <Servises></Servises>
            <OurWork></OurWork>
            <Review/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;