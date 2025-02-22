import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { appReducer, IAppState } from 'entities/app';
import { expenseReducer, IExpenseState } from 'entities/expense';

const rootReducer = {
    app: appReducer,
    expense: expenseReducer,
}

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

declare global {
   interface IRootState {
      app: IAppState;
      expense: IExpenseState;
    }

 type TAppDispatch = typeof store.dispatch;

 interface IThunkApiConfig {
    state: IRootState;
    dispatch: TAppDispatch;
    extra?: unknown
    rejectValue?: unknown
    serializedErrorType?: unknown
    pendingMeta?: unknown
    fulfilledMeta?: unknown
    rejectedMeta?: unknown
 }
}