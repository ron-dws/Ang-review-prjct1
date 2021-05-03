import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PremierCicleComponent } from './Components/Students/premier-cicle/premier-cicle.component';
// import { SecondCicleComponent } from './Components/Students/second-cicle/second-cicle.component';


@NgModule({
  declarations: [
    AppComponent,
    // PremierCicleComponent,
    // SecondCicleComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }