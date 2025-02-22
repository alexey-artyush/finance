import { IApiResponse, IResponseStatus } from 'shared/api/types';
import { DEFAULT_EXPENSES_LIST } from '../consts/expenseConst';
import { IExpense } from '../types/i-expense';

export const getExpensesListApi = (): Promise<IApiResponse<IExpense[]>> => {
  return new Promise((resolve) => {
    const mockResponse: IApiResponse<IExpense[]> = {
      message: 'Success',
      status: IResponseStatus.SUCCESS,
      result: DEFAULT_EXPENSES_LIST,
    };

    setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
};
