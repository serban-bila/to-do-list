import { initializeApp, } from 'firebase/app';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

import { store, dispatch } from '../../store/store';
import {logIn, logOut, changeName} from '../../features/user/userSlice'


const firebaseConfig = {
  apiKey: "AIzaSyBM4e_lbd7PmuCRRkhXsKkLTXDod17aZFU",
  authDomain: "one-at-a-time-7b8a2.firebaseapp.com",
  projectId: "one-at-a-time-7b8a2",
  storageBucket: "one-at-a-time-7b8a2.appspot.com",
  messagingSenderId: "1043612219442",
  appId: "1:1043612219442:web:3ac55fa13ba7093a6d642b",
  measurementId: "G-6L9HERS3T0"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  const { user } = await signInWithPopup(auth, provider);
  console.log(user);
    await createUserDocument(user);
    dispatch(logIn());
    dispatch(changeName(auth.currentUser.displayName))
}
export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  const userSnapshot= await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    }catch(error) {
      console.log('error creating the user' ,error)
    }
  }
  return userDocRef;
};

export const signOutUser = async () => {
  await signOut(auth);
  store.dispatch(logOut())
};

export const createUserData = async (userAuth) => {

  await setDoc(doc(db, userAuth.user.uid, "list"), {
    title: store.toDoList.title,
    isChecked: store.toDoList.isChecked,
  });

  const listRef = doc(db, userAuth.uid, 'list');
  setDoc(listRef, { capital: true }, { merge: true });
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);