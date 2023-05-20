import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './component/frame/frame.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FrameComponent],
  exports: [FrameComponent],
  imports: [CommonModule, RouterModule],
})
export class FrameModule {}
