import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnGuardService } from './main/core/guards/unguard.guard';
import { GuardService } from './main/core/guards/guard.guard';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full'
  }, 
  {
    path: 'auth',
    // canActivate: [UnGuardService],
    loadChildren: () => import('./main/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'main',
    // canActivate: [GuardService],
    component: MainComponent,
    children: [
      {
        path: 'features',
        loadChildren: () => import('./main/pages/features/features.module').then(module => module.FeaturesModule)
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
