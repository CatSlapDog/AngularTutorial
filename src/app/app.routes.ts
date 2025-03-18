import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';

export const routes: Routes = [
    {
        // add default path for navigator bar
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        // if want to link page to nav bar button need to add here
        // path name is use in selector in @Component of that component
        // before add here must ng g c <component name> to create component first
        // then add here to link to nav bar
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
    },
    {
        path:'signal',
        component: SignalComponent
    },
    {
        path:'linked-signal',
        component: LinkedSignalComponent
    }

];
   
