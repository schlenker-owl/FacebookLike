import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const ShortcutItem = ({ icon, title, color, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.shortcutItem}
      onPress={onPress}
    >
      <View style={[styles.shortcutIconContainer, { backgroundColor: color }]}>
        <Ionicons name={icon} size={22} color={COLORS.background} />
      </View>
      <Text style={styles.shortcutText} numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
  );
};

const ShortcutGrid = ({ shortcuts, onShortcutPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Shortcuts</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {shortcuts.map((shortcut) => (
          <ShortcutItem
            key={shortcut.id}
            icon={shortcut.icon}
            title={shortcut.title}
            color={shortcut.color}
            onPress={() => onShortcutPress(shortcut)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginBottom: 10,
  },
  headerText: {
    ...FONTS.h2,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  editText: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
  scrollContainer: {
    paddingHorizontal: SIZES.padding,
  },
  shortcutItem: {
    width: 80,
    alignItems: 'center',
    marginRight: 12,
  },
  shortcutIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  shortcutText: {
    ...FONTS.body3,
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default ShortcutGrid;