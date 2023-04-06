import {
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_ERROR,
  ADD_PROPERTY_SUCCESS,
  ADD_PROPERTY_ERROR,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_ERROR,
  DELETE_PROPERTY_SUCCESS,
  DELETE_PROPERTY_ERROR,
  RESET_PROPERTY_ERROR,
} from '../constants/actionTypes';

const initialState = {
  properties: [],
  propertyError: null,
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, properties: action.payload, propertyError: null };
    case FETCH_PROPERTIES_ERROR:
      return { ...state, propertyError: action.payload };
    case ADD_PROPERTY_SUCCESS:
      return { ...state, properties: [...state.properties, action.payload], propertyError: null };
    case ADD_PROPERTY_ERROR:
      return { ...state, propertyError: action.payload };
    case UPDATE_PROPERTY_SUCCESS:
      const updatedProperties = state.properties.map((property) =>
        property.id === action.payload.propertyId ? { ...property, ...action.payload.updatedData } : property
      );
      return { ...state, properties: updatedProperties, propertyError: null };
    case UPDATE_PROPERTY_ERROR:
      return { ...state, propertyError: action.payload };
    case DELETE_PROPERTY_SUCCESS:
      const filteredProperties = state.properties.filter((property) => property.id !== action.payload);
      return { ...state, properties: filteredProperties, propertyError: null };
    case DELETE_PROPERTY_ERROR:
      return { ...state, propertyError: action.payload };
    case RESET_PROPERTY_ERROR:
      return { ...state, propertyError: null };
    default:
      return state;
  }
};

export default propertyReducer;
