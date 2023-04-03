import React, { useState } from "react";

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const calculateMonthlyPayment = (event) => {
    event.preventDefault();

    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <div>
      <form onSubmit={calculateMonthlyPayment}>
        <label>
          Loan Amount:
          <input
            type="text"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </label>
        <br />
        <label>
          Interest Rate:
          <input
            type="text"
            value={interestRate}
            onChange={handleInterestRateChange}
          />
        </label>
        <br />
        <label>
          Loan Term (in years):
          <input
            type="text"
            value={loanTerm}
            onChange={handleLoanTermChange}
          />
        </label>
        <br />
        <button type="submit">Calculate Monthly Payment</button>
      </form>

      {monthlyPayment && (
        <p>
          Your estimated monthly payment is ${monthlyPayment}.
        </p>
      )}
    </div>
  );
}

export default MortgageCalculator;
