import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikesComponent } from './likes/likes.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TodoComponent } from './todo/todo.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    LikesComponent,
    CourseComponent,
    HeaderComponent,
    FooterComponent,
    InputFormatDirective,
    HomeComponent,
    AboutComponent,
    HighlightDirective,
    ZippyComponent,
    ContactComponent,
    ReactiveFormComponent,
    ChangePasswordComponent,
    TodoComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PostService, provideAnimations(), provideToastr()],
  bootstrap: [AppComponent],
})
export class AppModule {}
