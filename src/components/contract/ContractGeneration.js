import React, { useState } from 'react';

const ContractGeneration = () => {
  const [buyerName, setBuyerName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [closingDate, setClosingDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your backend or dispatch an action here
    console.log('Contract:', { buyerName, sellerName, propertyAddress, closingDate });
  };

  return (
    <div>
      <h2>Contract Generation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="buyerName">Buyer Name:</label>
          <input
            type="text"
            id="buyerName"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="sellerName">Seller Name:</label>
          <input
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propertyAddress">Property Address:</label>
          <input
            type="text"
            id="propertyAddress"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="closingDate">Closing Date:</label>
          <input
            type="date"
            id="closingDate"
            value={closingDate}
            onChange={(e) => setClosingDate(e.target.value)}
          />
        </div>
        <button type="submit">Generate Contract</button>
      </form>
    </div>
  );
};

export default ContractGeneration;
