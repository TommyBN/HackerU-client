import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { HttpClientModule } from '@angular/common/http';
import { LanguagePipe } from './pipes/language.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageColorPipe } from './pipes/language-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LanguagePipe,
    LanguageColorPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
