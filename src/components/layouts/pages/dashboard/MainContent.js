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
        <tbody>
          <tr>
            <td>#123992</td>
            <td>2019/01/01</td>
            <td>3,000</td>
            <td>12,000</td>
            <td><a href="user-loan-repayment.html">View</a></td>
          </tr>

          <tr>
            <td>#123920</td>
            <td>2018/12/12</td>
            <td>5,000</td>
            <td>25,000</td>
            <td><a href="user-loan-repayment.html">View</a></td>
          </tr>
          <tr>
            <td>#122392</td>
            <td>2018/10/12</td>
            <td>5,000</td>
            <td>100,000</td>
            <td><a href="user-loan-repayment.html">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default MainContent;
