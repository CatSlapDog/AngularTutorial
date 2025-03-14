import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path:'admin',
        component: AdminComponent
    },
    {
        path:'dataBinding', 
        component: DataBindingComponent
    },
    {
        path:'ng-class',
        component: NgClassComponent
    },
    {
        path:'control-flow',
        component: ControlStatementComponent
    }

];
   
