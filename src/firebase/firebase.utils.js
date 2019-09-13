import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnv0Xgad3EZJcGqtTz_UNMn0U1NNYhZIA",
    authDomain: "react-shop-b34e3.firebaseapp.com",
    databaseURL: "https://react-shop-b34e3.firebaseio.com",
    projectId: "react-shop-b34e3",
    storageBucket: "",
    messagingSenderId: "333948490711",
    appId: "1:333948490711:web:3df3f4a86d37c49c"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      console.log(additionalData)
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }    
    }    
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;