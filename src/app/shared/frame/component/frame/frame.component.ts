import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent {}
