import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFmFPTlOT5elLs7T8_aavw3qmAgJWzodY',
  authDomain: 'yctetris.firebaseapp.com',
  databaseURL: 'https://yctetris.firebaseio.com',
  projectId: 'yctetris',
  storageBucket: '',
  messagingSenderId: '979072593901',
  appId: '1:979072593901:web:5aa77e5ee1a52384'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
