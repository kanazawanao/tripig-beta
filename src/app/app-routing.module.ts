import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-info/user-info.module').then(m => m.UserInfoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then(m => m.SignInModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
