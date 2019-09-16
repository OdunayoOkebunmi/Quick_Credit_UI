import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllLoans } from '@Actions/loanActions';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loans: [],
    };
  }

  async componentDidMount() {
    try {
      const { fetchAllLoans: getAllLoans } = this.props;
      const loans = await getAllLoans();
      this.setState({ loans });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      // this.setState({ errors: { error: 'Something unusual happened, please try again' } });
    }
  }

  renderTableData() {
    const { loans } = this.state;
    return loans.map((data, index) => {
      const {
        id, email, tenor, amount, paymentInstallment, interest, createdOn,
      } = data;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{email}</td>
          <td>{tenor}</td>
          <td>{amount}</td>
          <td>{paymentInstallment}</td>
          <td>{interest}</td>
          <td>{createdOn}</td>
        </tr>
      );
    });
  }

  render() {
    return (

      <main className="user-dashboard-view">
        <div className="user-dashboard__history">
          <h3 className="heading-secondary">
            Transaction details
          </h3>
          <table className="user-dashboard__history--table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Email</th>
                <th>Tenor</th>
                <th>Amount</th>
                <th>Monthly Installemnts</th>
                <th>Interest</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>

          </table>
        </div>
      </main>

    );
  }
}

MainContent.propTypes = {
  fetchAllLoans: PropTypes.func.isRequired,
};
export default connect(
  null,
  { fetchAllLoans },
)(MainContent);
