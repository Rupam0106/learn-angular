import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  createPost(title: any) {
    return this.http.post(this.url, JSON.stringify(title));
  }
  getPost() {
    return this.http.get(this.url);
  }

  updatePost(post: any) {
    return this.http.patch(
      this.url + '/' + post.id,
      JSON.stringify({ readLine: true })
    );
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
