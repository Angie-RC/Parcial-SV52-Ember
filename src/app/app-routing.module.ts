import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {BundlesComponent} from "./ember/components/bundles/bundles.component";

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'store/bundles', component: BundlesComponent},



  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
