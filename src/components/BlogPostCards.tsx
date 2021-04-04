import React from 'react';
import useApi from '../hooks/useApi';
import postsService, { Post } from '../services/post';

export default function BlogPostCards() {
  const { data, isLoading, error, retry } = useApi(postsService.getPosts);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && renderErrorTemplate(error, retry)}
      {data && renderPosts(data)}
    </>
  );
}

function renderPosts(posts: Post[]) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h1>{post.title}</h1>
        </li>
      ))}
    </ul>
  );
}

function renderErrorTemplate(error: null, retry: () => void) {
  console.error(error);
  return (
    <>
      <h1>Error</h1>
      <button onClick={() => retry}>Retry</button>
    </>
  );
}
