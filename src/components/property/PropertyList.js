import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProperties } from '../../actions/propertyActions';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const properties = useSelector((state) => state.propertyReducer.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!properties.length) {
      dispatch(fetchProperties());
    }
  }, [properties, dispatch]);

  return (
    <div className="property-list">
      <h2>Property List</h2>
      <div className="row">
        {properties.map((property) => (
          <div key={property.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">
                  Price: ${property.price}
                </p>
                <p className="card-text">
                  Address: {property.address}
                </p>
                <Link to={`/properties/${property.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
