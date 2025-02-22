import { FC, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ExpenseItem } from '../../entities/expense/ui/ExpenseItem/ExpenseItem';
import { IExpense, TExpenseForm } from '../../entities/expense/model';
import { Formik } from 'formik';
import { useValidationSchema } from './model/hooks/useValidationSchema';
import { getFormattedDate, getThreeDays } from 'shared/utils/dates';
import { UIAmountInput } from 'shared/ui';
import { createStyles } from './AddExpense.styles';
import { useTheme } from 'shared/hooks';

interface IProps {
  expenses: IExpense[];
}

export const AddExpense: FC<IProps> = ({ expenses }) => {
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
          <UIAmountInput
            value={values.amount}
            onChange={(value) => setFieldValue('amount', value)}
            autoFocus={true}
          />
          {touched.amount && errors.amount && (
            <Text style={styles.amountError}>{errors.amount}</Text>
          )}

          <View style={styles.expensesContainer}>
            {expenses.map((expense) => (
              <View key={expense.id} style={styles.itemWrapper}>
                <ExpenseItem
                  currentExpense={values.expenseId === expense.id}
                  expense={expense}
                  onPress={(expense) => setFieldValue('expenseId', expense.id)}
                />
              </View>
            ))}
            {touched.expenseId && errors.expenseId && (
              <Text style={styles.expenseError}>{errors.expenseId}</Text>
            )}
          </View>

          <View style={styles.datesContainer}>
            {dates.map((date) => (
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

          <Pressable
            style={[
              styles.submitButton,
              (!values.amount || !values.expenseId) && styles.submitButtonDisabled,
            ]}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.submitButtonText}>Add Expense</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
