import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import moment from "moment";

const config = {
  apiKey: "AIzaSyB32qkzCZyTQScWS1V6hYM2-nsDhd1cEhI",
  authDomain: "nuntium-4839c.firebaseapp.com",
  projectId: "nuntium-4839c",
  storageBucket: "nuntium-4839c.appspot.com",
  messagingSenderId: "655756217144",
  appId: "1:655756217144:web:302acdf4bf61dc1a794fcd",
  measurementId: "G-NGF5BJ0GT9",
};

firebase.initializeApp(config);
// firebase.getAnalytics(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = moment().format("MM/DD/YYYY");

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert("Error creating user!");
    }
  }

  return userRef;
};

export const updateProfileData = async (userId, profileData) => {
  const collectionRef = firestore.collection("users");
  const docRef = collectionRef.doc(userId);
  const batch = firestore.batch();

  batch.set(docRef, profileData);

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {
      title,
      paragraph1,
      paragraph2,
      paragraph3,
      author,
      bg,
      img1,
      img2,
    } = doc.data();

    return {
      id: doc.id,
      title,
      paragraph1,
      paragraph2,
      paragraph3,
      author,
      bg,
      img1,
      img2,
    };
  });

  // * Code below transforms your mapped collections title to your desired title, e.g.,
  // * you have 0: {title: Hats, items: Array(6)}, etc.
  // * and with code below you can set it to for example,
  // * hats: {title: Hats, items: Array(6)}
  // ! Here I used document id as each collection's title because it's unique

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
