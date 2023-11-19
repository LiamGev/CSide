import { Route } from '@angular/router';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailComponent } from "../../../../libs/TerrariaWiki/features/src/lib/user/user-detail/user-detail.component";
import { UserEditComponent } from "../../../../libs/TerrariaWiki/features/src/lib/user/user-edit/user-edit.component";
import { UserListComponent } from "../../../../libs/TerrariaWiki/features/src/lib/user/user-list/user-list.component";

export const appRoutes: Route[] = [
    { path: "users", pathMatch: "full", component: UserListComponent },
    // users/new moet voor users/:id, omdat new anders als de id wordt gezien.
    // Volgorde is belangrijk in routing.
    { path: "users/new", pathMatch: "full", component: UserEditComponent },
    { path: "users/:id", pathMatch: "full", component: UserDetailComponent },
    { path: "users/:id/edit", pathMatch: "full", component: UserEditComponent },
    // Catch-all route: als er geen URL match is gaan we naar component-a (of dashboard, of naar 404)
    { path: "**", redirectTo: "" },
];
