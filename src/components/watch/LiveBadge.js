import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../styles/theme';

const LiveBadge = ({ style }) => {
  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.badgeText}>LIVE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.notification,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    ...FONTS.small,
    color: COLORS.background,
    fontWeight: 'bold',
  },
});

export default LiveBadge;