import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProperties } from '../../actions/propertyActions';

const PropertyDetails = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.propertyReducer.properties);
  const dispatch = useDispatch();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (!properties.length) {
      dispatch(fetchProperties());
    } else {
      const selectedProperty = properties.find((property) => property.id === id);
      setProperty(selectedProperty);
    }
  }, [id, properties, dispatch]);

  useEffect(() => {
    if (properties.length) {
      const selectedProperty = properties.find((property) => property.id === id);
      setProperty(selectedProperty);
    }
  }, [id, properties]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-details">
      <h2>{property.title}</h2>
      <p>Price: ${property.price}</p>
      <p>Address: {property.address}</p>
      <p>City: {property.city}</p>
      <p>State: {property.state}</p>
      <p>Zip: {property.zip}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Square Feet: {property.squareFeet}</p>
      <p>Lot Size: {property.lotSize} sqft</p>
      <p>Year Built: {property.yearBuilt}</p>
      <p>Description: {property.description}</p>
    </div>
  );
};

export default PropertyDetails;
