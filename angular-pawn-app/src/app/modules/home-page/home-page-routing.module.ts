import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./home-page.component";


const routes: Routes = [
  {
    path: "home-page", component: HomePageComponent
  },
  {
    path: "", component: HomePageComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}