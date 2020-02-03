import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from '@Common/input/InputField';
import Button from '@Common/button/Button';
import { createLoan } from '@Actions/loanActions';
import './CreateLoan.scss';

class CreateLoan extends Component {
  state = {
    firstName: '',
    lastName: '',
    amount: 0,
    tenor: 0,
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCreateLoan = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      amount,
      tenor,
    } = this.state;
    const loanData = {
      firstName,
      lastName,
      amount: Number(amount),
      tenor: Number(tenor),
    };

    const { onSubmit, history } = this.props;
    onSubmit(loanData, history);
  }


  render() {
    const {
      amount,
      tenor,
    } = this.state;


    return (
      <section className="section-loan-apply">
        <div className="form-container">
          <h2 className="heading-secondary">
            LOAN APPLICATION
          </h2>
          <form id="loan-apply-form" onSubmit={this.handleCreateLoan}>
            <div className="flex-group">
              <div>
                <label htmlFor="amount">Loan Amount ₦</label>
                <InputField
                  required
                  value={amount}
                  type="number"
                  id="amount"
                  className="form-control"
                  name="amount"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="user-interest-amount">Interest ₦</label>
                <InputField
                  id="interest"
                  className="form-control"
                  placeholder="5%"
                  disabled
                  name="user-interest-amount"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="tenor">Tenor</label>
                <InputField
                  id="tenor"
                  value={tenor}
                  type="number"
                  min="1"
                  max="12"
                  className="form-control"
                  name="tenor"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="btn btn--block"
              id="submit-btn"
              text="Apply"
            />
          </form>
        </div>
      </section>
    );
  }
}

CreateLoan.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  data: state.loans.data,
  error: state.loans.error,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (loanData, history) => dispatch(createLoan(loanData, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateLoan);
