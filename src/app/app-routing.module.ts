import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-us', loadChildren: ()=> import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact-us', loadChildren: ()=> import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: 'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
