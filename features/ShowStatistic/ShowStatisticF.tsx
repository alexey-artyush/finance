import { createStyles } from './ShowStatisticF.style';
import React, { useMemo, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from 'shared/hooks';
import { UiChart, UiTabsSwitch } from 'shared/ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
enum EPeriod {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export const ShowStatisticF = () => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);
  const [period, setPeriod] = useState<EPeriod>(EPeriod.DAY);
  const [offset, setOffset] = useState(0);

  const tabs = [
    { title: EPeriod.DAY },
    { title: EPeriod.WEEK },
    { title: EPeriod.MONTH },
    { title: EPeriod.YEAR },
  ];

  const pieData = [
    {
      name: 'Категория 1',
      population: 215,
      color: currentTheme.colors.primary,
      legendFontColor: '#7F7F7F',
    },
    {
      name: 'Категория 2',
      population: 280,
      color: currentTheme.colors.secondary,
      legendFontColor: '#7F7F7F',
    },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const getCurrentDate = () => {
    const now = new Date();
    switch (period) {
      case EPeriod.DAY:
        return new Date(now.setDate(now.getDate() - offset));
      case EPeriod.WEEK:
        return new Date(now.setDate(now.getDate() - offset * 7));
      case EPeriod.MONTH:
        return new Date(now.setMonth(now.getMonth() - offset));
      case EPeriod.YEAR:
        return new Date(now.setFullYear(now.getFullYear() - offset));
    }
  };

  const getPeriodLabel = () => {
    const currentDate = getCurrentDate();

    switch (period) {
      case EPeriod.DAY:
        return currentDate.toLocaleDateString('en-US');
      case EPeriod.WEEK: {
        const monday = new Date(currentDate.getTime());
        const dayOfWeek = monday.getDay();

        monday.setDate(monday.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

        const sunday = new Date(monday.getTime());
        sunday.setDate(monday.getDate() + 6);

        const mondayStr = monday.toLocaleDateString('en-US');
        const sundayStr = sunday.toLocaleDateString('en-US');

        console.log('sundayStr', `${mondayStr} - ${sundayStr}`);

        return `${mondayStr} - ${sundayStr}`;
      }
      case EPeriod.MONTH:
        return currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      case EPeriod.YEAR:
        return currentDate.getFullYear().toString();
    }
  };

  const handleTabChange = (newPeriod: EPeriod) => {
    setPeriod(newPeriod);
    setOffset(0);
  };

  const handlePrevious = () => {
    setOffset(prev => prev + 1);
  };

  const handleNext = () => {
    if (offset > 0) {
      setOffset(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <UiTabsSwitch tabs={tabs} currentTab={period} onTabChange={handleTabChange} size="m" />

      <View style={styles.periodNavigator}>
        <TouchableOpacity onPress={handlePrevious}>
          <Icon name="chevron-left" size={24} color={currentTheme.colors.primary} />
        </TouchableOpacity>

        <View style={styles.periodContainer}>
          <Text variant="titleMedium" style={styles.periodText}>
            {getPeriodLabel()}
          </Text>
        </View>

        {offset > 0 && (
          <TouchableOpacity onPress={handleNext}>
            <Icon name="chevron-right" size={24} color={currentTheme.colors.primary} />
          </TouchableOpacity>
        )}
        {offset === 0 && <View style={styles.arrowPlaceholder} />}
      </View>

      <UiChart data={chartData} pieData={pieData} />
    </View>
  );
};
