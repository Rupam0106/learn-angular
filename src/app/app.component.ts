import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'learn-angular';

  post={
    title:"title",
    isFavorite:true,
  }

  onFavoriteChange(event:boolean){
    
  }
}
