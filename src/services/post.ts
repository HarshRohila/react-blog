import db from './db';

class PostService {
  getPosts() {
    return db.query<Post>('posts');
  }
}

export interface Post {
  title: string;
  content: string;
}

const postsService = new PostService();
export default postsService;
