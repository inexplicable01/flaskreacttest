import * as actionTypes from '../constants/actionTypes';
import {fetchOffersAPI, updateOfferStatusAPI} from '../api/offersAPI';
import {db} from '../firebaseConfig';

export const fetchOffers = () => async (dispatch) => {
    try {
        const offers = await fetchOffersAPI();
        dispatch({type: actionTypes.FETCH_OFFERS_SUCCESS, payload: offers});
    } catch (error) {
        dispatch({type: actionTypes.FETCH_OFFERS_ERROR, payload: error.message});
    }
};

export const updateOfferStatus = (offerId, status) => async (dispatch) => {
    try {
        await updateOfferStatusAPI(offerId, status);
        dispatch({
            type: actionTypes.UPDATE_OFFER_STATUS_SUCCESS,
            payload: {offerId, status},
        });
    } catch (error) {
        dispatch({type: actionTypes.UPDATE_OFFER_STATUS_ERROR, payload: error.message});
    }
};

export const submitOffer = (offer) => async (dispatch) => {
    try {
        const docRef = await db.collection('offers').add(offer);
        const newOffer = {id: docRef.id, ...offer};
        dispatch({type: actionTypes.SUBMIT_OFFER_SUCCESS, payload: newOffer});
    } catch (error) {
        dispatch({type: actionTypes.SUBMIT_OFFER_ERROR, payload: error.message});
    }
};
