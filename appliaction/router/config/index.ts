export const AppRoutes = {
    HOME: '',
    EXPENSES: 'expenses',
    INCOME: 'income',
    EXPENSE_DETAILS: 'expenses/[id]',
    ADD_TRANSACTION: 'modal/add-transaction',
  } as const;
  
  export type AppRoutesType = typeof AppRoutes;
  
  export const routeConfig = {
    [AppRoutes.HOME]: {
      title: 'Home',
      path: AppRoutes.HOME,
      name: 'index',
      headerShown: false,   
    },
    [AppRoutes.EXPENSES]: {
      title: 'Expenses',
      path: AppRoutes.EXPENSES,
      name: 'expenses/index',
      headerShown: false,
    },
    [AppRoutes.INCOME]: {
      title: 'Income',
      path: AppRoutes.INCOME,
      name: 'income/index',
      headerShown: false,
    },
    [AppRoutes.EXPENSE_DETAILS]: {
      title: 'Expense Details',
      path: AppRoutes.EXPENSE_DETAILS,
      name: 'expenses/[id]',
      headerShown: false,
    },
    [AppRoutes.ADD_TRANSACTION]: {
      title: 'Add Transaction',
      path: AppRoutes.ADD_TRANSACTION,
      name: 'modal/add-transaction',
      headerShown: false,
    },
  } as const;
  

