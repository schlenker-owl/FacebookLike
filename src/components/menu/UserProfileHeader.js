import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const UserProfileHeader = ({ user, onProfilePress, onCreatePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.profileContainer}
        onPress={onProfilePress}
      >
        <Image 
          source={{ uri: user.avatar || 'https://via.placeholder.com/60' }} 
          style={styles.avatar} 
        />
        
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.viewProfile}>View your profile</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.createButton}
        onPress={onCreatePress}
      >
        <Ionicons name="add-circle" size={20} color={COLORS.primary} />
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    ...FONTS.h2,
    color: COLORS.text,
    marginBottom: 4,
  },
  viewProfile: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  createText: {
    ...FONTS.body3,
    color: COLORS.primary,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default UserProfileHeader;