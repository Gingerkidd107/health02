import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'connect-wearable',
    loadChildren: () => import('./connect-wearable/connect-wearable.module').then( m => m.ConnectWearablePageModule)
  },
  {
    path: 'manage-data',
    loadChildren: () => import('./manage-data/manage-data.module').then( m => m.ManageDataPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
      path: 'settings',
      redirectTo: 'tabs/tab5'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'initial-collection',
    loadChildren: () => import('./initial-collection/initial-collection.module').then( m => m.InitialCollectionPageModule)
  },
  {
    path: 'intake-details',
    loadChildren: () => import('./intake-details/intake-details.module').then( m => m.IntakeDetailsPageModule)
  },  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
