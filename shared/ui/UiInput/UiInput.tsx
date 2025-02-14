import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface IProps {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  error?: string;
}

export const UiInput = ({ 
  value, 
  onChangeText, 
  label,
  secureTextEntry = false,
  error
}: IProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      label={label}
      mode="outlined"
      secureTextEntry={secureTextEntry}
      error={!!error}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
  },
});