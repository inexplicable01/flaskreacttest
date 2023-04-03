import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOffers, updateOfferStatus } from '../../actions/offerActions';

const ManageOffers = () => {
  const offers = useSelector((state) => state.offer.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const handleStatusChange = (offerId, status) => {
    dispatch(updateOfferStatus(offerId, status));
  };

  return (
    <div>
      <h1>Manage Offers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Property ID</th>
            <th>Buyer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td>{offer.propertyId}</td>
              <td>{offer.buyer}</td>
              <td>{offer.amount}</td>
              <td>{offer.status}</td>
              <td>
                <button onClick={() => handleStatusChange(offer.id, 'accepted')} className="btn btn-success">Accept</button>
                <button onClick={() => handleStatusChange(offer.id, 'rejected')} className="btn btn-danger">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOffers;
