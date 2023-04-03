import * as actionTypes from '../constants/actionTypes';
import db from '../firebaseConfig';



// Fetch properties
export const fetchProperties = () => async (dispatch) => {
  try {
    const snapshot = await db.collection('properties').get();
    const properties = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: actionTypes.FETCH_PROPERTIES_SUCCESS, payload: properties });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_PROPERTIES_ERROR, payload: error.message });
  }
};

// Add a property
export const addProperty = (property) => async (dispatch) => {
  try {
    const docRef = await db.collection('properties').add(property);
    const newProperty = { id: docRef.id, ...property };
    dispatch({ type: actionTypes.ADD_PROPERTY_SUCCESS, payload: newProperty });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_PROPERTY_ERROR, payload: error.message });
  }
};

// Update a property
export const updateProperty = (propertyId, updatedData) => async (dispatch) => {
  try {
    await db.collection('properties').doc(propertyId).update(updatedData);
    dispatch({
      type: actionTypes.UPDATE_PROPERTY_SUCCESS,
      payload: { propertyId, updatedData },
    });
  } catch (error) {
    dispatch({ type: actionTypes.UPDATE_PROPERTY_ERROR, payload: error.message });
  }
};

// Delete a property
export const deleteProperty = (propertyId) => async (dispatch) => {
  try {
    await db.collection('properties').doc(propertyId).delete();
    dispatch({ type: actionTypes.DELETE_PROPERTY_SUCCESS, payload: propertyId });
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_PROPERTY_ERROR, payload: error.message });
  }
};

// Reset property error
export const resetPropertyError = () => ({
  type: actionTypes.RESET_PROPERTY_ERROR,
});
