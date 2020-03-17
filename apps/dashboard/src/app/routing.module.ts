import {NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogsItemComponent } from './dogs/dogs-item/dogs-item.component';
import { LoginComponent } from '@dogs-ngrx/ui-libraries';
import { WildcardComponent } from '@dogs-ngrx/ui-libraries';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'dogs/:id', component: DogsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
