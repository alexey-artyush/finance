import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './NavigateToAddExpenseF.styles';
import { UiButton } from 'shared/ui';
import { AppRoutes } from 'shared/config/router/routes';

export const NavigateToAddExpenseF = () => {
  const navigation = useNavigation();

  const handleNavigateToAddExpensePress = () => {
    navigation.navigate(AppRoutes.ADD_TRANSACTION);
  };

  return (
    <View style={styles.navigateToAddExpenseF}>
      <UiButton onPress={handleNavigateToAddExpensePress} isCircle>
        +
      </UiButton>
    </View>
  );
};
