import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPYTgTk7AvlaU_FVwj4C_xkUR098EUDw4',
  authDomain: 'react-movie-app-c1618.firebaseapp.com',
  projectId: 'react-movie-app-c1618',
  storageBucket: 'react-movie-app-c1618.appspot.com',
  messagingSenderId: '801474757174',
  appId: '1:801474757174:web:23fcb80997b2a5ec6d8e97',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate('/');
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate('/');
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert('logged Out');
};
