import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/containers';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MywellnessComponent } from './components/mywellness/mywellness.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';
import { TaskFormComponent } from './components/task-page/task-form/task-form.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { LoanCaseComponent } from './components/loan-case/loan-case.component';

import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MywellnessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myWellNess',
    component: MywellnessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newLoan',
    component: NewLoanComponent,
    canActivate: [AuthGuard]

  },
 
  {
    path: 'taskQueue',
    component: TaskPageComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'taskForm/:taskId',
    component: TaskFormComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'

  },
  {
    path: 'newOrder',
    component: NewOrderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'loanCase',
    component: LoanCaseComponent,
    canActivate: [AuthGuard]
  },
 
 // { path: 'login', component: LoginComponent },
  { path: 'login', component: AuthPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
