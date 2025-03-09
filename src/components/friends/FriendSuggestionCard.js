import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const FriendSuggestionCard = ({ suggestion, onAdd, onRemove }) => {
  const { user, mutualFriends } = suggestion;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user.avatar || 'https://via.placeholder.com/80' }} 
        style={styles.avatar} 
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{user.name}</Text>
        
        {mutualFriends > 0 && (
          <View style={styles.mutualFriendsContainer}>
            <Text style={styles.mutualFriendsText}>
              {mutualFriends} mutual friend{mutualFriends > 1 ? 's' : ''}
            </Text>
          </View>
        )}
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.addButton]}
            onPress={() => onAdd && onAdd(suggestion)}
          >
            <Text style={styles.addButtonText}>Add Friend</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.removeButton]}
            onPress={() => onRemove && onRemove(suggestion)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    padding: SIZES.padding,
    marginBottom: 1,
    borderRadius: SIZES.radius,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    ...FONTS.h3,
    color: COLORS.text,
    marginBottom: 4,
  },
  mutualFriendsContainer: {
    marginBottom: 10,
  },
  mutualFriendsText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  addButton: {
    backgroundColor: COLORS.primary,
  },
  addButtonText: {
    ...FONTS.body3,
    color: COLORS.background,
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: COLORS.lightGray,
  },
  removeButtonText: {
    ...FONTS.body3,
    color: COLORS.text,
    fontWeight: '600',
  },
});

export default FriendSuggestionCard;