import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const FriendRequestCard = ({ request, onAccept, onDecline }) => {
  const { user, mutualFriends, timeAgo } = request;

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
        
        <Text style={styles.timeAgo}>{timeAgo}</Text>
        
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.acceptButton]}
            onPress={() => onAccept && onAccept(request)}
          >
            <Text style={styles.acceptButtonText}>Confirm</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.declineButton]}
            onPress={() => onDecline && onDecline(request)}
          >
            <Text style={styles.declineButtonText}>Delete</Text>
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
    marginBottom: 4,
  },
  mutualFriendsText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  timeAgo: {
    ...FONTS.small,
    color: COLORS.secondaryText,
    marginBottom: 10,
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
  acceptButton: {
    backgroundColor: COLORS.primary,
  },
  acceptButtonText: {
    ...FONTS.body3,
    color: COLORS.background,
    fontWeight: '600',
  },
  declineButton: {
    backgroundColor: COLORS.lightGray,
  },
  declineButtonText: {
    ...FONTS.body3,
    color: COLORS.text,
    fontWeight: '600',
  },
});

export default FriendRequestCard;