import { Button as PaperButton } from 'react-native-paper';
import { useMemo } from 'react';
import { useTheme } from 'shared/hooks';
import { createStyles } from './UiButton.styles';

interface IProps {
  onPress: () => void;
  children: React.ReactNode;
  mode?: 'text' | 'outlined' | 'contained';
  loading?: boolean;
  disabled?: boolean;
  isCircle?: boolean;
  circleSize?: number;
}

export const UiButton = ({
  onPress,
  children,
  mode = 'contained',
  loading = false,
  disabled = false,
  isCircle = false,
  circleSize = 45,
}: IProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  const circleStyles = useMemo(() => {
    if (!isCircle) return {};
    return {
      width: circleSize,
      height: circleSize,
      minWidth: circleSize,
      borderRadius: circleSize / 2,
    };
  }, [isCircle, circleSize]);

  const circleLabelStyles = useMemo(() => {
    if (!isCircle) return {};
    return {
      fontSize: circleSize * 0.4,
      lineHeight: circleSize,
      height: circleSize,
      margin: 0,
      padding: 0,
    };
  }, [isCircle, circleSize]);

  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={[styles.uiButton, isCircle && styles.circleButton, isCircle && circleStyles]}
      labelStyle={[isCircle && styles.circleButtonLabel, isCircle && circleLabelStyles]}
    >
      {children}
    </PaperButton>
  );
};
