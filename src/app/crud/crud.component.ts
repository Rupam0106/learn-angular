import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  posts: any = [];
  constructor(private service: PostService, private toastr: ToastrService) {}

  ngOnInit() {
    this.service.getPost().subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe((response) => {
      // post.['id'] = response.json().id;
      // this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.toastr.success('User Successfully Deleted');
      },
      (error: Response) => {
        if (error.status === 400) {
          console.log(error);
          this.toastr.success(error.statusText);
        }
      }
    );
  }
}
