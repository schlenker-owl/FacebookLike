import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const VideoCategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.tabItem,
              activeCategory === category.id && styles.activeTabItem,
            ]}
            onPress={() => onSelectCategory(category.id)}
          >
            <Text
              style={[
                styles.tabText,
                activeCategory === category.id && styles.activeTabText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  tabsContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
  },
  tabItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
  },
  activeTabItem: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  activeTabText: {
    color: COLORS.background,
    fontWeight: '600',
  },
});

export default VideoCategoryTabs;