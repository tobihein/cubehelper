import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlgorithmlistComponent } from './components/algorithmlist/algorithmlist.component';
import { AlgorithmComponent } from './components/algorithm/algorithm.component';
import { MoveComponent } from './components/move/move.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmlistComponent,
    AlgorithmComponent,
    MoveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
