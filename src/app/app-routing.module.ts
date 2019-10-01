import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/top/top.module').then(m => m.TopModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'place',
    loadChildren: () =>
      import('./pages/place/place.module').then(m => m.PlaceModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./pages/setting/setting.module').then(m => m.SettingModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
