import React from 'react';

const MainContent = () => (
  <main className="admin-users-loans--view">
    <div className="admin-users-loans__details">
      <h3 className="heading-secondary">
        loan applications
      </h3>
      <table className="admin-users-loans__details--table">
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Loan Status</th>
            <th>Repaid</th>
            <th>Tenor</th>
            <th>Amount ₦</th>
            <th>
              Monthly
              {' '}
              <br />
              Installments
              {' '}
              <br />
              ₦
            </th>
            <th>
              Balance
              {' '}
              <br />
              ₦
            </th>
            <th>
              Interest
              {' '}
              <br />
              ₦
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#122392</td>
            <td>odun@mail.com</td>
            <td>2019/01/01</td>
            <td>Pending</td>
            <td>False</td>
            <td>10</td>
            <td>2,000,000</td>
            <td>210,000</td>
            <td>2,000,000</td>
            <td>100,000</td>
            <td>
              <a
                href="#user-loan-popup"
                title="View Single Loan"
              >
                <i className="fa fa-eye" />

              </a>
              <a href="#">
                <i className="fa fa-check" title="Approve Loan" />

              </a>
              <a href="#">
                <i className="fa fa-times" title="Reject Loan" />

              </a>
            </td>
          </tr>

          <tr>
            <td>#122323</td>
            <td>harry@hedwig.com</td>
            <td>2019/01/01</td>
            <td>Approved</td>
            <td>True</td>
            <td>12</td>
            <td>150,000</td>
            <td>13,125</td>
            <td>0</td>
            <td>7,500</td>
            <td>
              <a
                href="#user-loan-popup"
                title="View Single Loan"
              >
                <i className="fa fa-eye" />

              </a>
              <a href="#">
                <i className="fa fa-check" title="Approve Loan" />

              </a>
              <a href="#">
                <i className="fa fa-times" title="Reject Loan" />

              </a>
            </td>
          </tr>
          <tr>
            <td>#122323</td>
            <td>gandalf@gray.com</td>
            <td>2018/02/11</td>
            <td>Declined</td>
            <td>False</td>
            <td>4</td>
            <td>100,000</td>
            <td>30,000</td>
            <td>100,000</td>
            <td>5000</td>
            <td>
              <a
                href="#user-loan-popup"
                title="View Single Loan"
              >
                <i className="fa fa-eye" />

              </a>
              <a href="#">
                <i className="fa fa-check" title="Approve Loan" />

              </a>
              <a href="#">
                <i className="fa fa-times" title="Reject Loan" />

              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
);

export default MainContent;
