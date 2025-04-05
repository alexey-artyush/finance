import React, { useState } from 'react';
import { Menu, Button, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export interface ICurrency {
  code: string;
  symbol: string;
}

interface IProps {
  currencies: ICurrency[];
  selectedCurrency: ICurrency;
  onCurrencyChange: (currency: ICurrency) => void;
}

export const UiCurrencySelector: React.FC<IProps> = ({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleCurrencySelect = (currency: ICurrency) => {
    onCurrencyChange(currency);
    closeMenu();
  };

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={
        <Button
          onPress={openMenu}
          mode="text"
          labelStyle={styles.currencySymbol}
          contentStyle={styles.buttonContent}
        >
          {selectedCurrency.symbol}
        </Button>
      }
    >
      {currencies.map(currency => (
        <Menu.Item
          key={currency.code}
          onPress={() => handleCurrencySelect(currency)}
          title={`${currency.code} (${currency.symbol})`}
        />
      ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  currencySymbol: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContent: {
    minWidth: 40,
    paddingHorizontal: 8,
  },
});
