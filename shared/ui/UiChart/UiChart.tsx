import { useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from 'shared/hooks';
import { createStyles } from './UiChart.styles';

interface UiChartProps {
  data: {
    labels: string[];
    datasets: Array<{
      data: number[];
    }>;
  };
  pieData: Array<{
    name: string;
    population: number;
    color: string;
    legendFontColor: string;
  }>;
}

export const UiChart = ({ pieData }: UiChartProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  return (
    <View style={styles.uiChart}>
      <PieChart
        data={pieData}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="0"
        hasLegend={false}
        center={[Dimensions.get('window').width / 4, 0]}
      />
    </View>
  );
};
