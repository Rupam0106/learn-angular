import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: CourseComponent,
    path: 'course',
  },
  {
    component: CourseComponent,
    path: 'favorite',
  },
  {
    component: AboutComponent,
    path: 'about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
