import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

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
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
      }}
    >
      <PieChart
        data={pieData}
        width={Dimensions.get('window').width - 32}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        hasLegend={false}
        center={[50, 0]}
      />
    </View>
  );
};
