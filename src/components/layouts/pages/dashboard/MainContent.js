import React from 'react';

const MainContent = () => (
  <main className="user-dashboard-view">
    <div className="user-dashboard__history">
      <h3 className="heading-secondary">
        Transaction details
      </h3>
      <table className="user-dashboard__history--table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Date Created</th>
            <th>Monthly Installments ₦</th>
            <th>Total Amount ₦</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  </main>
);

export default MainContent;
