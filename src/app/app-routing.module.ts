import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoComponent } from './todo/todo.component';
import { CrudComponent } from './crud/crud.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UpdateComponent } from './crud/update/update.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { authGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    canActivate: [authGuardGuard],
  },
  {
    component: CourseComponent,
    path: 'course',
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
  {
    component: CrudComponent,
    path: 'crud',
  },
  {
    component: UpdateComponent,
    path: 'crud/:id',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: LogoutComponent,
    path: 'logout',
  },
  {
    component: NotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
