import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const NotificationSettings = ({ onSettingsPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onSettingsPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="settings-outline" size={22} color={COLORS.text} />
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>Notification Settings</Text>
        <Text style={styles.subtitle}>Manage how you're notified</Text>
      </View>
      
      <Ionicons name="chevron-forward" size={20} color={COLORS.secondaryText} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
    marginBottom: 8,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  subtitle: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
});

export default NotificationSettings;