export interface IExpense {
  id: string;
  title: string;
  categoryId: string;
  description?: string;
}

export interface TExpenseForm {
  amount: string;
  expenseId: string;
  date: Date;
}
