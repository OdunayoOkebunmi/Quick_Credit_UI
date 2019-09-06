import React, { Component } from 'react';
import InputField from '@Common/input/InputField';
import './LoanCalculator.scss';

class LoanCalculator extends Component {
  state = {
    loanAmount: '',
    interest: 0.05,
    tenor: '',
    error: '',
    isResultVisible: false,
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateLoan = () => {
    const { loanAmount: amount, interest, tenor } = this.state;
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) * principal;
    const calculatedPayments = parseInt(tenor, 10);
    const monthly = (principal + calculatedInterest) / calculatedPayments;
    const monthlyPayment = monthly.toFixed(2);
    const totalPayment = (monthly * calculatedPayments).toFixed(2);
    const totalInterest = ((monthly * calculatedPayments) - principal).toFixed(2);

    if (Number.isFinite(monthly)) {
      this.setState({
        monthlyPayment,
        totalPayment,
        totalInterest,
      });
    } else {
      this.setState({ error: 'Please check your numbers' });
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.calculateLoan();
    this.setState({
      isResultVisible: true,
    });
  }

  render() {
    const {
      loanAmount, interest, tenor,
      monthlyPayment, totalPayment, totalInterest,
      error, isResultVisible,
    } = this.state;
    return (
      <section className="section-loan-calculator">
        <div className="loan-calculator-container">
          <div className="card">
            <h2 className="heading-secondary loan-calc-heading">
              Loan Calculator
            </h2>
            <form id="loan-form" onSubmit={this.handleFormSubmit}>
              <InputField
                type="number"
                className="form-control"
                id="amount"
                placeholder="Loan Amount in Naira(₦)"
                min={5000}
                max={100000}
                name="loanAmount"
                value={loanAmount}
                onChange={this.handleInputChange}
                required
              />
              <InputField
                type="number"
                className="form-control"
                id="interest"
                placeholder="Interest (5%)"
                disabled
                name="interest"
                value={interest}
              />
              <InputField
                type="number"
                className="form-control"
                id="tenor"
                placeholder="Tenor (maximum of 12 months)"
                min={1}
                max={12}
                name="tenor"
                value={tenor}
                onChange={this.handleInputChange}
                required
              />
              <div className="form-group">
                <input type="submit" defaultValue="Calculate" className="btn btn--block" />
              </div>
            </form>
            <div id="loading">
              {!!error && <img src="https://res.cloudinary.com/dnl5kwhe6/image/upload/v1567563417/Quick_Credit/loading_vtzvkr.gif" alt="Loading GIF" />}
            </div>
            {isResultVisible && (
              <div id="results">
                <h5 className="heading-tertiary">Results</h5>
                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="monthly-payment">
                      Monthly Payment ₦
                    </label>
                    <input type="number" className="form-control" id="monthly-payment" disabled value={monthlyPayment} />

                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="total-interest">
                      Total Interest ₦
                    </label>
                    <input type="number" className="form-control" id="total-interest" disabled value={totalInterest} />

                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <label htmlFor="total-payment">
                      Total Payment ₦
                    </label>
                    <input type="number" className="form-control" id="total-payment" disabled value={totalPayment} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default LoanCalculator;
