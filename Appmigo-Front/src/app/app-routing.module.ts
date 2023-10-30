import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GiftPageComponent } from './pages/gift-page/gift-page.component';

const routes: Routes = [
  {path: 'main-page', component: MainPageComponent},
  {path: 'gift-page', component: GiftPageComponent},
  {path: '**', redirectTo: 'main-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
