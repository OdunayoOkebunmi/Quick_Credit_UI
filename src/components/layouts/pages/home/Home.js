import React, { Fragment } from 'react';
import '@Common/_base.scss';
import Header from '@Layouts/header/Header';
import Stories from '@Layouts/stories/Stories';
import LoanCalculator from '@Layouts/loan-calculator/LoanCalculator';
import Footer from '@Layouts/footer/Footer';

const Home = () => (
  <Fragment>

    <Header />
    <LoanCalculator />
    <Stories />
    <Footer />

  </Fragment>
);
export default Home;
