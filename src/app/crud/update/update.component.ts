import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: number = 0;
  userData: any;
  form;
  constructor(
    private route: ActivatedRoute,
    fb: FormBuilder,
    private router:Router,
    private post: PostService
  ) {
    this.form = fb.group({
      validId: ['', Validators.required],
      body: ['', Validators.required],
      title: ['', Validators.required, ,],
    });
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    id &&
      this.post.updatePost(id).subscribe((data) => {
        console.warn(data);
        this.userData = data;
      });
  }

  onSubmit(data: any) {
    console.log(data);
    this.router.navigate(['crud'])
  }
  get title() {
    return this.form.get('title');
  }

  get validId() {
    return this.form.get('validId');
  }

  get body() {
    return this.form.get('body');
  }
}
