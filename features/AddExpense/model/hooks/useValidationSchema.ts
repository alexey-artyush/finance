import { TExpenseForm } from 'entities/expense/model';
import { requiredValidation } from 'shared/lib/yup';
import * as yup from 'yup';

export const useValidationSchema = () => {
  const validationSchema: yup.ObjectSchema<TExpenseForm> = yup.object({
    amount: requiredValidation(),
    expenseId: requiredValidation(),
    date: yup.date().required('Date is required').max(new Date(), 'Date cannot be in the future'),
  });

  return validationSchema;
};
