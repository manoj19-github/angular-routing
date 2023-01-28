import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { Features1Component } from './features1/features1.component';
import { HelpComponent } from './help/help.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouteModule } from './app-route.module';
import { AuthService } from './auth.service';
import { AuthGurardService } from './auth-guard.service';
import { ContactService } from './contact/contact.service';
import { PercentagePipe } from './contact/percentage.pipe';

@NgModule({
  declarations: [
    PercentagePipe,
    AppComponent,
    HomeComponent,
    ContactComponent,
    FeaturesComponent,
    HelpComponent,
    Features1Component,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRouteModule],
  providers: [AuthService, AuthGurardService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
