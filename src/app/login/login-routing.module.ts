import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { SettingComponent } from './setting/setting.component';
import { AuthenticationGuard } from '../guard/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'bussiness',
    loadChildren: () => import('./bussiness/bussiness.module').then( m => m.BussinessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule { }
