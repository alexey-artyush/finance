import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ExpenseItem } from '../../../entities/expense/ui/ExpenseItem/ExpenseItem';
import { IExpense, TExpenseForm } from '../../../entities/expense/model';
import { Formik } from 'formik';
import { useValidationSchema } from '../model/hooks/useValidationSchema';
import { getFormattedDate, getThreeDays } from 'shared/utils/dates';
import { UiCurrencySelector, UiInput } from 'shared/ui';
import { createStyles } from './AddExpense.styles';
import { useTheme } from 'shared/hooks';

const currencies = [
  { code: 'RUB', symbol: '₽' },
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
];

interface IProps {
  expenses: IExpense[];
}

export const AddExpenseW = ({ expenses }: IProps) => {
  const dates = getThreeDays();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  const initialValues: TExpenseForm = {
    amount: '',
    expenseId: '',
    date: new Date(),
  };

  const handleSubmit = (values: TExpenseForm) => {
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={useValidationSchema()}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, values, setFieldValue, errors, touched }) => (
        <View style={styles.container}>
          <UiInput
            numbersOnly={true}
            onChangeText={value => setFieldValue('amount', value)}
            value={values.amount}
            label=""
            rightContent={
              <UiCurrencySelector
                currencies={currencies}
                selectedCurrency={currencies[0]}
                onCurrencyChange={() => {}}
              />
            }
            error={touched.amount && errors.amount ? errors.amount : undefined}
          />
          <View style={styles.expensesContainer}>
            {expenses.map(expense => (
              <View key={expense.id} style={styles.itemWrapper}>
                <ExpenseItem
                  currentExpense={values.expenseId === expense.id}
                  expense={expense}
                  onPress={expense => setFieldValue('expenseId', expense.id)}
                />
              </View>
            ))}
          </View>

          <View style={styles.datesContainer}>
            {dates.map(date => (
              <Pressable
                key={date.toISOString()}
                style={[
                  styles.dateItem,
                  date.toDateString() === selectedDate.toDateString() && styles.selectedDateItem,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    styles.dateText,
                    date.toDateString() === selectedDate.toDateString() && styles.selectedDateText,
                  ]}
                >
                  {getFormattedDate(date)}
                </Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={[styles.submitButton]} onPress={() => handleSubmit()}>
            <Text style={styles.submitButtonText}>Add Expense</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
