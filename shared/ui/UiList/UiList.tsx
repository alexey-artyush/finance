import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'shared/hooks';
import { createStyles } from './UiList.styles';

interface IListItemProps {
  item: IListItemData;
  currencySymbol?: string;
}

interface IListItemData {
  id: string;
  icon: string;
  name: string;
  percentage: number;
  amount: number;
  color?: string;
}

const ListItem = ({ item, currencySymbol = '$' }: IListItemProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  return (
    <View style={styles.listItem}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: item.color || '#E0E0E0' }]}>
          <Ionicons name={item.icon as any} size={20} color="white" />
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={[styles.percentage]}>{item.percentage}%</Text>
        <Text style={styles.amount}>
          {item.amount.toLocaleString()} {currencySymbol}
        </Text>
      </View>
    </View>
  );
};

interface IProps {
  data: IListItemData[];
  currencySymbol?: string;
}

export const UiList = ({ data, currencySymbol = '$' }: IProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  return (
    <View style={styles.uiList}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListItem item={item} currencySymbol={currencySymbol} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
      />
    </View>
  );
};
