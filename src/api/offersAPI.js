
import db from '../firebaseConfig.js';

export const fetchOffersAPI = async () => {
  try {
    const snapshot = await db.collection('offers').get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    throw new Error('Error fetching offers');
  }
};

export const updateOfferStatusAPI = async (offerId, status) => {
  try {
    await db.collection('offers').doc(offerId).update({ status: status });
  } catch (error) {
    throw new Error('Error updating offer status');
  }
};
