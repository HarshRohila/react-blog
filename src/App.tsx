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
import postsService from './services/post';
import Home from './pages/Home';
import Header from './components/Header';

// @ts-ignore
import nightwind from 'nightwind/helper';

function writeToFirestore() {
  postsService.save({
    title: 'harsh',
    content: 'test',
  });
}

async function read() {
  const posts = await postsService.getPosts();
  console.log(posts);
}

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <div className="App">
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }}></script>
        <Header />
        <Home />
        {/* <button
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
              writeToFirestore();
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd filter={({ providerId }) => providerId !== 'anonymous'}>
            {({ providerId }) => {
              return <div>You are authenticated with {providerId}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
        <Editor /> */}
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
