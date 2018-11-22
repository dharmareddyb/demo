import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { coursesComponent } from './cources.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,coursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
