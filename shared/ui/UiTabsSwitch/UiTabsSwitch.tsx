import { createStyles } from './UiTabsSwitch.style';
import { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'shared/hooks';

interface IProps {
  tabs: { title: string }[];
  currentTab: string;
  onTabChange: (title: string) => void;
}

export const UiTabSwitch = ({ tabs, currentTab, onTabChange }: IProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

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
