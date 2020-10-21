import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ2mooTFQu2zij7CwsQdQy1u72n6QPVx0",
    authDomain: "crwn-db-6e0f6.firebaseapp.com",
    databaseURL: "https://crwn-db-6e0f6.firebaseio.com",
    projectId: "crwn-db-6e0f6",
    storageBucket: "crwn-db-6e0f6.appspot.com",
    messagingSenderId: "760802851826",
    appId: "1:760802851826:web:9c5c80d5f30a7ac712896b",
    measurementId: "G-PFJJ683EZG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // If there is no userAuth object
    if (!userAuth) return;

    // Get the user id and take a snapshot
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // If the snapshot exists then add the user to the db
    if (!snapShot.exists) {
      // Get the display name and email from the user, get current date time
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // Attempt to create the user's data in the db async
      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user: ', error.message);
      }
    }
    
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // firebase google signup auth
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;