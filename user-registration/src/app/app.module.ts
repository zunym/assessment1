import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Install material module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Install flex-layout
import{ FlexLayoutModule } from '@angular/flex-layout';
//Create manually material.module.ts for declare module of API and others
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
