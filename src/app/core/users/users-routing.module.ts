import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPageAdminComponent} from './user-page-admin/user-page-admin.component';
import {CreatedUserComponent} from './created-user/created-user.component';
import {CreatedAdminComponent} from './created-admin/created-admin.component';
import {DeletedUserComponent} from './deleted-user/deleted-user.component';
import {AllUsersComponent} from './all-users/all-users.component';

const routes: Routes = [
  {path: '', component: UserPageAdminComponent},
  {path: 'createdUser', component: CreatedUserComponent},
  {path: 'createdAdmin', component: CreatedAdminComponent},
  {path: 'deletedUser', component: DeletedUserComponent},
  {path: 'allUsers', component: AllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule{
}
