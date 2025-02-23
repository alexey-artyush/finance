import { createStyles } from './UiTabsSwitch.style';
import { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'shared/hooks';

interface IProps<T extends string> {
  tabs: { title: T }[];
  currentTab: T;
  onTabChange: (title: T) => void;
  size?: 'm' | 'l';
}

export const UiTabsSwitch = <T extends string>({
  tabs,
  currentTab,
  onTabChange,
  size = 'l',
}: IProps<T>) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme, size), [currentTheme, size]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.title}
            onPress={() => onTabChange(tab.title)}
            style={styles.tabButton}
          >
            <Text style={[styles.tabText, currentTab === tab.title && styles.activeTabText]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
