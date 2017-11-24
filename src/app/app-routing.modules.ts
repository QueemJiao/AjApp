import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DoComponent } from './do/do.component';
import { YouComponent } from './you/you.component';
import { MissComponent } from './miss/miss.component';
import { MeComponent } from './me/me.component';
import { ReneeComponent } from './renee/renee.component';
import { LonginComponent } from './longin/longin.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [

  {path: 'do', component: DoComponent},
  {path: 'you' , component: YouComponent},
  {path: 'miss', component: MissComponent},
  {path: 'me', component: MeComponent},
  {path: 'main', component: ReneeComponent},
  {path: 'login', component: LonginComponent},
  {path: 'signup', component: SignupComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export  class AppRoutingModule {}
