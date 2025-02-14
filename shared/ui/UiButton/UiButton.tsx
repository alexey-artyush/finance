import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface IProps {
  onPress: () => void;
  title: string;
  mode?: 'text' | 'outlined' | 'contained';
  loading?: boolean;
  disabled?: boolean;
}

export const UiButton = ({ 
  onPress, 
  title, 
  mode = 'contained',
  loading = false,
  disabled = false 
}: IProps) => {
  return (
    <PaperButton 
      mode={mode} 
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={styles.button}
    >
      {title}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    borderRadius: 8,
  },
});