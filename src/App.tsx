import './App.css';
import Editor from './components/Editor';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import React from 'react';
import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from '@react-firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp({
  apiKey: 'AIzaSyDHaf-Qy7OYRM5___osPlRTTAJmlFTtRjs',
  authDomain: 'react-blog-cbf68.firebaseapp.com',
  projectId: 'react-blog-cbf68',
});

const db = firebase.firestore();

db.collection('posts')
  .add({
    title: 'Ada',
    content: 'Lovelace',
  })
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <div className="App">
        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: 'auto' }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd filter={({ providerId }) => providerId !== 'anonymous'}>
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
        <Editor />
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
