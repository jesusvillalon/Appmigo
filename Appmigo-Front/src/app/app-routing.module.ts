import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GiftPageComponent } from './pages/gift-page/gift-page.component';
import { BlacklistPageComponent } from './pages/blacklist-page/blacklist-page.component';

const routes: Routes = [
  {path: 'home', component: MainPageComponent},
  {path: 'gift-page', component: GiftPageComponent},
  {path:'blacklist', component:BlacklistPageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
