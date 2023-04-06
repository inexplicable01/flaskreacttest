import {
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_ERROR,
  UPDATE_OFFER_STATUS_SUCCESS,
  UPDATE_OFFER_STATUS_ERROR,
  SUBMIT_OFFER_SUCCESS,
  SUBMIT_OFFER_ERROR,
} from '../constants/actionTypes';

const initialState = {
  offers: [],
  error: null,
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      return { ...state, offers: action.payload };
    case FETCH_OFFERS_ERROR:
      return { ...state, error: action.payload };
    case UPDATE_OFFER_STATUS_SUCCESS:
      return {
        ...state,
        offers: state.offers.map((offer) =>
          offer.id === action.payload.offerId
            ? { ...offer, status: action.payload.status }
            : offer
        ),
      };
    case UPDATE_OFFER_STATUS_ERROR:
      return { ...state, error: action.payload };
    case SUBMIT_OFFER_SUCCESS:
      return { ...state, offers: [...state.offers, action.payload] };
    case SUBMIT_OFFER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default offerReducer;