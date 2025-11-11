import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from '../components/menu.component/menu.component';
import { DeptsComponent } from '../components/depts.component/depts.component';
import { appRoutingProvider, routing } from '../app.routing';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepts } from '../services/service.depts';

@NgModule({
  declarations: 
  [
    App,
    MenuComponent,
    DeptsComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider,
    ServiceDepts
  ],
  bootstrap: [App]
})
export class AppModule { }
