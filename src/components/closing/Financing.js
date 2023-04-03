import React, { useState } from 'react';

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your backend or dispatch an action here
    console.log('Financing:', { loanAmount, interestRate, loanTerm });
  };

  return (
    <div>
      <h2>Financing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate:</label>
          <input
            type="number"
            id="interestRate"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Financing;