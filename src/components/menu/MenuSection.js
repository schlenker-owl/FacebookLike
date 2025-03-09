import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const MenuSection = ({ title, children }) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
      
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding,
  },
  headerContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.lightGray,
  },
  headerText: {
    ...FONTS.h3,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: COLORS.background,
  },
});

export default MenuSection;