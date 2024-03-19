import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFilmsComponent } from './Pages/pages/all-films/all-films.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
