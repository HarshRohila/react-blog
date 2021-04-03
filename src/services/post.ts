import db from './db';

class PostService {
  getPosts() {
    return db.query<Post>('posts');
  }

  async save(post: Post) {
    await db.save('posts', post);
  }
}

export interface Post {
  title: string;
  content: string;
}

const postsService = new PostService();
export default postsService;
