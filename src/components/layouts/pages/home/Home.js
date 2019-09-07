import React, { Fragment } from 'react';
import '@Common/styles/_base.scss';
import Header from '@Layouts/header/Header';
import Stories from '@Layouts/stories/Stories';
import LoanCalculator from '@Layouts/loan-calculator/LoanCalculator';
import Footer from '@Layouts/footer/Footer';

const Home = () => (
  <Fragment>
    <div className="container">
      <Header />
      <LoanCalculator />
      <Stories />
      <Footer />
    </div>
  </Fragment>
);
export default Home;
