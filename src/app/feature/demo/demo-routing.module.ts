import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from '@feature/demo/component/demo/demo.component';

const subRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(subRoutes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
