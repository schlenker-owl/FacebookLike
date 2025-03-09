import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const FriendCategoryHeader = ({ title, count, actionText, onAction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {count > 0 && <Text style={styles.count}>{count}</Text>}
      </View>
      
      {actionText && (
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => onAction && onAction()}
        >
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.text,
    fontWeight: 'bold',
    marginRight: 8,
  },
  count: {
    backgroundColor: COLORS.lightGray,
    color: COLORS.secondaryText,
    ...FONTS.body3,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  actionButton: {
    padding: 5,
  },
  actionText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
});

export default FriendCategoryHeader;