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
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideToastr } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UpdateComponent } from './crud/update/update.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Login1Component } from './pages/login1/login1.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
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
    NotFoundComponent,
    UpdateComponent,
    LoginComponent,
    LogoutComponent,
    Login1Component,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [PostService, provideAnimations(), provideToastr()],
  bootstrap: [AppComponent],
})
export class AppModule {}
