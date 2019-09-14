import React from 'react';
import DashboardHeader from '@Common/dashboard/DashboardHeader';
import AdminDashboardSidebar from '@Common/dashboard/AdminDashboardSidebar';
import MainContent from './MainContent';
import '@Common/styles/dashboard.scss';
import './MainContent.scss';


const AdminDashboard = () => (
  <div className="dashboard-container">
    <DashboardHeader />
    <div className="content">
      <AdminDashboardSidebar />
      <MainContent />
    </div>
  </div>
);


export default AdminDashboard;
