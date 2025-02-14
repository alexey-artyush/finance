import { ReactNode, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'shared/hooks/useTheme';

interface IUiProviderProps {
  children: ReactNode;
}

export const UiProvider = ({ children }: IUiProviderProps) => {
  const { currentTheme, loadSavedTheme } = useTheme();

  useEffect(() => {
    loadSavedTheme();
  }, []);


  return <PaperProvider theme={currentTheme}>{children}</PaperProvider>;
};