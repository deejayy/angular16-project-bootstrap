import { Injectable } from '@angular/core';
import { DemoActions } from '@feature/demo/store/demo.actions';
import { demoFeature } from '@feature/demo/store/demo.reducer';
import { DemoState } from '@feature/demo/store/demo.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class DemoFacade {
  public date$: Observable<Date> = this.store.select(demoFeature.selectDate);

  constructor(private store: Store<DemoState>) {}

  public setDate(date: Date) {
    this.store.dispatch(DemoActions.setDate({ payload: date }));
  }
}
