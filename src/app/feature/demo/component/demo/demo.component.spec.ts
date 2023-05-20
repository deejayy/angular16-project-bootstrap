import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ApiCallerModule } from '@deejayy/api-caller';
import { ReactiveConfigModule } from '@deejayy/reactive-config';
import { RuntimeLocalizerModule } from '@deejayy/runtime-localizer';
import { DemoFacade } from '@feature/demo/store/demo.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        ApiCallerModule,
        RuntimeLocalizerModule,
        ReactiveConfigModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTableModule,
        MatTabsModule,
      ],
      declarations: [DemoComponent],
      providers: [DemoFacade],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
