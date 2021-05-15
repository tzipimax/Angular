import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { ShowWorkersComponent } from './show-workers/show-workers.component';
import { ShowRolesComponent } from './show-roles/show-roles.component';
//import { NewPi peComponent } from './new-pipe/new-pipe.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowWorkersComponent,
    ShowRolesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
