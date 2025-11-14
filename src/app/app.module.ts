import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NamesComponent } from './Names/names.component';

const route: Route[] = [
  { path: '', redirectTo: 'names', pathMatch: 'full' },
  { path:'names',component:NamesComponent},
  { path: 'admin', loadChildren: () => import('./Admin/admin.module').then(res => res.AdminModule) },
  { path: 'create', loadChildren: () => import('./creation/creator.module').then(res => res.createrModule) }
]

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route,{preloadingStrategy:PreloadAllModules,useHash:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
