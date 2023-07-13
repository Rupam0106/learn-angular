import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  posts: any = [];
  constructor(
    private service: PostService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getPost().subscribe((response) => {
      this.posts = JSON.parse(JSON.stringify(response));
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
      id: this.posts.length + 1,
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    };
    input.value = '';
    this.service.createPost(post).subscribe((response) => {
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      let result = JSON.parse(JSON.stringify(response));
      this.router.navigate([`crud/${result.id}`], {
        queryParams: { page: 1, order: 'newest' },
      });
    });
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.toastr.success('User Deleted Successfully ');
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
