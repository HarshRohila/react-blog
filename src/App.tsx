import { FirebaseAuthProvider } from '@react-firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import './App.css';
import Header from './components/Header';
import firebaseConfig from './firebaseConfig';
import Home from './pages/Home';
import postsService from './services/post';
import { RouteComponentProps, Router } from '@reach/router';
import BlogPostCards from './components/BlogPostCards';

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
        <Header />
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
          <RouterPage path="/blog" pageComponent={<BlogPostCards />} />
        </Router>
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

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent;

export default App;
