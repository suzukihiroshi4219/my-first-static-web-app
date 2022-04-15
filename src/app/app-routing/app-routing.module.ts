import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from '../login/login.component';
import { GraphComponent }  from '../graph/graph.component';
import { CommonModule } from '@angular/common';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

const routes: Routes = [
  { path: 'graph', component: GraphComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "dialog", component: MapDialogComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
