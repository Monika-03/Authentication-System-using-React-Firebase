import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsHzfkw2zPKN3-4nA7qe5h-oo7Mq5zGfk",
    authDomain: "auth-systemr.firebaseapp.com",
    projectId: "auth-systemr",
    storageBucket: "auth-systemr.appspot.com",
    messagingSenderId: "486653300619",
    appId: "1:486653300619:web:cd2c2114e9767404c0a98e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth=firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider()
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export {auth,googleProvider,fbProvider,githubProvider};