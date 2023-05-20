import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEMO_ROUTES } from '@feature/demo/demo-routing-parent';

const routes: Routes = [...DEMO_ROUTES];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
