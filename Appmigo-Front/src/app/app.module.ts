import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GiftPageComponent } from './pages/gift-page/gift-page.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ParticipantsComponent } from './components/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GiftPageComponent,
    InstructionsComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
