import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { G1Component } from './g1/g1.component';
import { G2Component } from './g2/g2.component';
import { G3Component } from './g3/g3.component';
import { G4Component } from './g4/g4.component';
import { G5Component } from './g5/g5.component';
import { HomeComponent } from './home/home.component';
import { OptioncardComponent } from './optioncard/optioncard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = 
[
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"upload",component:UploadComponent},
  {path:"g1",component:G1Component},
  {path:"g2",component:G2Component},
  {path:"g3",component:G3Component},
  {path:"g4",component:G4Component},
  {path:"g5",component:G5Component},
  {path:"forgetpass",component:ForgetpassComponent},
  {path:"dashboard", component:UserDashboardComponent},
  {path:"optioncard", component:OptioncardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
