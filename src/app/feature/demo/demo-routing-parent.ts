import type { Routes } from '@angular/router';
import { FrameComponent } from '@shared/frame/component/frame/frame.component';

export const DEMO_ROUTES: Routes = [
  {
    path: 'demo',
    component: FrameComponent,
    loadChildren: () => {
      return import('@feature/demo/demo.module').then((m) => {
        return m.DemoModule;
      });
    },
  },
];
