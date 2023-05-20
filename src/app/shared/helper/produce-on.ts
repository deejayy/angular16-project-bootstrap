import { ActionCreator, ActionType, Creator, on, ReducerTypes } from '@ngrx/store';
import { Draft, enableMapSet, produce } from 'immer';

enableMapSet();

export const produceOn = <C1 extends ActionCreator, S>(
  actionType: C1,
  callback: (draft: Draft<S>, action: ActionType<C1>) => void,
): ReducerTypes<S, ActionCreator<string, Creator<C1[]>>[]> =>
  on(actionType, (state, action) => produce(state, (draft: Draft<S>) => callback(draft, action)));
