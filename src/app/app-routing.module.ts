import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { APP_ROUTES } from './config/app-routes.config';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guard/auth.guard';
import { canLeaveGuard } from './guards/can-leave.guard';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: APP_ROUTES.cv, component: AdminComponent, children: [
    {path: '', component: CvComponent},
    {path: 'add', component: AddCvComponent, canActivate: [authGuard]},
    {path: ':id', component: DetailsCvComponent},
  ]},
  {path: 'todo', component: TodoComponent, canDeactivate: [canLeaveGuard]},
  {path: 'word', component: MiniWordComponent},
  {path: 'color', component: ColorComponent},
  {path: APP_ROUTES.login, component: LoginComponent},
  {path: ':quelquechose/cc/:autrechose', component: SecondComponent},
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
