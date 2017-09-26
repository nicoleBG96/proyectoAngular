import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from "./components/demo/demo.component";
import {Demo1Component} from "./components/demo1/demo1.component";
import {AbilitiesComponent} from "./components/abilities/abilities.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: 'demo',component: DemoComponent
  },
  {
    path: 'demo1',component: Demo1Component
  },
  {
    path: 'abilities',component: AbilitiesComponent
  },
  {
    path: 'contact',component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
