import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './list/list.component';
import {UserEditComponent} from "./edit/edit.component";
import {UserViewComponent} from "./view/view.component";
import {UserCreateComponent} from "./create/create.component";
import {NzModalRef} from "ng-zorro-antd";

const routes: Routes = [
    // {path: 'index', component: }

    {path: 'list', component: UserListComponent, cache: false},
    {path: 'create', component: UserCreateComponent, data: {title: '创建用户'}},
    {path: 'edit/:id', component: UserEditComponent, data: {title: '编辑用户'}},
    {path: 'view/:id', component: UserViewComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [NzModalRef]
})
export class UserRoutingModule {
}
