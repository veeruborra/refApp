import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path:'login' , component: LoginComponent },
  { path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [NgbModule,RouterModule.forRoot(routes)],
  declarations: [LoginComponent],
  exports: [NgbModule,RouterModule,LoginComponent]
})
export class AppRoutingModule { }
