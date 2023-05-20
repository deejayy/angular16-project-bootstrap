import { DemoActions } from '@feature/demo/store/demo.actions';
import { demoInitialState } from '@feature/demo/store/demo.state';
import { createFeature, createReducer } from '@ngrx/store';
import { produceOn } from '@shared/helper/produce-on';

export const demoFeature = createFeature({
  name: 'demo',
  reducer: createReducer(
    demoInitialState,
    produceOn(DemoActions.setDate, (state, action) => {
      state.date = action.payload;
    }),
  ),
});
