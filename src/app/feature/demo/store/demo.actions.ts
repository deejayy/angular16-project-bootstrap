import { createAction, props } from '@ngrx/store';

export class DemoActions {
  public static setDate = createAction('[Demo] Set date', props<{ payload: Date }>());
}
