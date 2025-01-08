import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UseraddComponent } from './components/useradd/useradd.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'userlist', pathMatch: 'full'
  },
  {
    path: 'userlist', component: UserlistComponent
  },{
    path: 'userlist/add', component: UserFormComponent
  },{
    path: 'userlist/edit/:id', component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
