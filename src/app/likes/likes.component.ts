import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent {
title="Click here to Like and Dislike"

  @Input() likesCount: number = 0;
  @Input() isActive: boolean = false;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
