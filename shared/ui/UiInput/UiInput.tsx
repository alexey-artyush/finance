import { TextInput, HelperText } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface IProps {
  value: string;
  onChangeText: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  error?: string;
  numbersOnly?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const UiInput = ({
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  error,
  numbersOnly = false,
  leftIcon,
  rightIcon,
  rightContent,
  ...props
}: IProps) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          label={label}
          mode="flat"
          secureTextEntry={secureTextEntry}
          error={!!error}
          style={styles.input}
          keyboardType={numbersOnly ? 'numeric' : 'default'}
          left={leftIcon}
          right={rightContent ? <TextInput.Icon icon={() => rightContent} /> : rightIcon}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          {...props}
        />
      </View>
      {error ? (
        <HelperText type="error" visible={!!error}>
          {error}
        </HelperText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    marginHorizontal: 0,
    paddingHorizontal: 0,
    paddingRight: 10,
    fontSize: 32,
  },
});
