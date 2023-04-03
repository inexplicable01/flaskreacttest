import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitOffer } from '../../actions/offerActions';

const SubmitOffer = () => {
  const dispatch = useDispatch();

  const [buyer, setBuyer] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOffer = {
      buyer,
      propertyId,
      amount,
      status: 'pending',
    };
    dispatch(submitOffer(newOffer));
  };

  return (
    <div>
      <h1>Submit Offer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="buyer" className="form-label">Buyer</label>
          <input
            type="text"
            className="form-control"
            id="buyer"
            value={buyer}
            onChange={(e) => setBuyer(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propertyId" className="form-label">Property ID</label>
          <input
            type="text"
            className="form-control"
            id="propertyId"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Offer Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Offer</button>
      </form>
    </div>
  );
};

export default SubmitOffer;
