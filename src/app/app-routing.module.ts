import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoComponent } from './todo/todo.component';

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
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: ReactiveFormComponent,
    path: 'reactive-form',
  },
  {
    component: ChangePasswordComponent,
    path: 'change-password',
  },
  {
    component: TodoComponent,
    path: 'todo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
