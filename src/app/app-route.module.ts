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
import { AuthGurardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'features',
    canActivateChild: [AuthGurardService],
    children: [{ path: '1', component: Features1Component }],
  },
  { path: 'help/:id', component: HelpComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouteModule {}
