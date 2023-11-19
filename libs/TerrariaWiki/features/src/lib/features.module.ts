import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
  ],
  providers: [UserService],
  exports: [UserDetailComponent, UserListComponent, UserEditComponent],
})
export class FeaturesModule {}
