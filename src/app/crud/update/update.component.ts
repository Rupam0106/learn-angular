import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  id: number = 0;
  form;
  constructor(private route: ActivatedRoute, fb: FormBuilder) {
    this.form = fb.group({
      validId: ['', Validators.required],
      body: ['', Validators.required],
      title: ['', Validators.required, ,],
    });
  }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit(data: any) {
    console.log(data);
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
