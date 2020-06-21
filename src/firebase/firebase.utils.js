import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgI2u9uoqGnfHrCFmV1sxUPgnxhkj_dZI',
  authDomain: 'crown-db-e6716.firebaseapp.com',
  databaseURL: 'https://crown-db-e6716.firebaseio.com',
  projectId: 'crown-db-e6716',
  storageBucket: 'crown-db-e6716.appspot.com',
  messagingSenderId: '46961447696',
  appId: '1:46961447696:web:1d1fc15c818518dd530b95',
  measurementId: 'G-BKDKM5B3VF',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
