import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-angular';
  color = '';
  convert = 'lowercase';
  post = {
    title: 'title',
    isFavorite: true,
  };

  tweet = {
    body: '...',
    likesCount: 11,
    isLiked: true,
  };
  role = 'Users';
  onFavoriteChange(event: boolean) {}
}
