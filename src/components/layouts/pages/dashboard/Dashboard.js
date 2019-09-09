/* eslint-disable no-console */
import React from 'react';
import DashboardHeader from '@Common/dashboard/DashboardHeader';
import DashboardSidebar from '@Common/dashboard/DashboardSidebar';
import MainContent from './MainContent';
import '@Common/styles/dashboard.scss';
import './MainContent.scss';


const Dashboard = () => (
  <div className="dashboard-container">
    <DashboardHeader />
    <div className="content">
      <DashboardSidebar />
      <MainContent />
    </div>
  </div>
);


export default Dashboard;
