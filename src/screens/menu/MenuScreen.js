import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

// Components
import UserProfileHeader from '../../components/menu/UserProfileHeader';
import ShortcutGrid from '../../components/menu/ShortcutGrid';
import MenuSection from '../../components/menu/MenuSection';
import MenuItem from '../../components/menu/MenuItem';

// Mock Data
const MOCK_USER = {
  id: 'user-1',
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

const MOCK_SHORTCUTS = [
  {
    id: 'shortcut-1',
    title: 'Memories',
    icon: 'time',
    color: '#1877F2',
  },
  {
    id: 'shortcut-2',
    title: 'Saved',
    icon: 'bookmark',
    color: '#A333C8',
  },
  {
    id: 'shortcut-3',
    title: 'Groups',
    icon: 'people',
    color: '#4267B2',
  },
  {
    id: 'shortcut-4',
    title: 'Marketplace',
    icon: 'storefront',
    color: '#F5533D',
  },
  {
    id: 'shortcut-5',
    title: 'Friends',
    icon: 'person-add',
    color: '#4080FF',
  },
  {
    id: 'shortcut-6',
    title: 'Events',
    icon: 'calendar',
    color: '#E91E63',
  },
];

const MenuScreen = ({ navigation }) => {
  const handleProfilePress = () => {
    console.log('Navigate to profile');
    // navigation.navigate('Profile', { userId: MOCK_USER.id });
  };
  
  const handleCreatePress = () => {
    console.log('Open create menu');
    // Show create options modal
  };
  
  const handleShortcutPress = (shortcut) => {
    console.log(`Navigate to ${shortcut.title}`);
    // navigation.navigate(shortcut.route);
  };
  
  const handleMenuItemPress = (item) => {
    console.log(`Menu item pressed: ${item}`);
    // Handle specific menu item actions
  };
  
  const handleLogout = () => {
    console.log('Logout pressed');
    // Handle logout logic
  };
  
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Menu</Text>
      <TouchableOpacity style={styles.headerButton}>
        <Ionicons name="search" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserProfileHeader 
          user={MOCK_USER}
          onProfilePress={handleProfilePress}
          onCreatePress={handleCreatePress}
        />
        
        <ShortcutGrid 
          shortcuts={MOCK_SHORTCUTS}
          onShortcutPress={handleShortcutPress}
        />
        
        <MenuSection title="All Shortcuts">
          <MenuItem 
            icon="time" 
            title="Memories"
            subtitle="Your memories and posts from the past"
            onPress={() => handleMenuItemPress('Memories')}
          />
          <MenuItem 
            icon="bookmark" 
            title="Saved"
            subtitle="Find posts, photos, and videos that you saved for later"
            onPress={() => handleMenuItemPress('Saved')}
          />
          <MenuItem 
            icon="people" 
            title="Groups"
            subtitle="Connect with people who share your interests"
            onPress={() => handleMenuItemPress('Groups')}
          />
          <MenuItem 
            icon="calendar" 
            title="Events"
            subtitle="Organize or find events and other things to do online or nearby"
            onPress={() => handleMenuItemPress('Events')}
          />
          <MenuItem 
            icon="storefront" 
            title="Marketplace"
            subtitle="Buy and sell items with people in your community"
            onPress={() => handleMenuItemPress('Marketplace')}
          />
        </MenuSection>
        
        <MenuSection title="Settings & Privacy">
          <MenuItem 
            icon="settings" 
            title="Settings"
            onPress={() => handleMenuItemPress('Settings')}
          />
          <MenuItem 
            icon="shield-checkmark" 
            title="Privacy Checkup"
            onPress={() => handleMenuItemPress('Privacy Checkup')}
          />
          <MenuItem 
            icon="lock-closed" 
            title="Privacy Shortcuts"
            onPress={() => handleMenuItemPress('Privacy Shortcuts')}
          />
          <MenuItem 
            icon="eye" 
            title="Activity Log"
            onPress={() => handleMenuItemPress('Activity Log')}
          />
          <MenuItem 
            icon="newspaper" 
            title="News Feed Preferences"
            onPress={() => handleMenuItemPress('News Feed Preferences')}
          />
        </MenuSection>
        
        <MenuSection title="Help & Support">
          <MenuItem 
            icon="help-circle" 
            title="Help Center"
            onPress={() => handleMenuItemPress('Help Center')}
          />
          <MenuItem 
            icon="mail" 
            title="Support Inbox"
            onPress={() => handleMenuItemPress('Support Inbox')}
          />
          <MenuItem 
            icon="warning" 
            title="Report a Problem"
            onPress={() => handleMenuItemPress('Report a Problem')}
          />
        </MenuSection>
        
        <MenuSection>
          <MenuItem 
            icon="log-out" 
            title="Log Out"
            showChevron={false}
            onPress={handleLogout}
          />
        </MenuSection>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Facebook © 2025</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  headerButton: {
    backgroundColor: COLORS.lightGray,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: SIZES.padding,
    marginBottom: 20,
  },
  footerText: {
    ...FONTS.small,
    color: COLORS.secondaryText,
    textAlign: 'center',
  },
});

export default MenuScreen;