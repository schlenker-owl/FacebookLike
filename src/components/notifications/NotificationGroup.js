import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';
import NotificationItem from './NotificationItem';

const NotificationGroup = ({ title, notifications, onNotificationPress, onOptionPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      
      {notifications.map((notification) => (
        <NotificationItem 
          key={notification.id}
          notification={notification}
          onPress={onNotificationPress}
          onOptionPress={onOptionPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.base,
  },
  headerContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  headerText: {
    ...FONTS.h2,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});

export default NotificationGroup;