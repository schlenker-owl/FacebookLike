import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const NotificationItem = ({ notification, onPress, onOptionPress }) => {
  const getIconForType = (type) => {
    switch (type) {
      case 'like':
        return { name: 'thumbs-up', color: COLORS.primary, bgColor: '#E7F3FF' };
      case 'comment':
        return { name: 'chatbubble', color: COLORS.primary, bgColor: '#E7F3FF' };
      case 'friend_request':
        return { name: 'person-add', color: '#1877F2', bgColor: '#E7F3FF' };
      case 'friend_accepted':
        return { name: 'people', color: '#1877F2', bgColor: '#E7F3FF' };
      case 'birthday':
        return { name: 'gift', color: '#F5533D', bgColor: '#FEECEB' };
      case 'event':
        return { name: 'calendar', color: '#9360F7', bgColor: '#F5F0FE' };
      case 'group':
        return { name: 'people-circle', color: '#58C472', bgColor: '#EDF9F0' };
      default:
        return { name: 'notifications', color: COLORS.primary, bgColor: '#E7F3FF' };
    }
  };

  const icon = getIconForType(notification.type);

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        notification.unread && styles.unreadContainer
      ]}
      onPress={() => onPress && onPress(notification)}
    >
      <View style={[styles.iconContainer, { backgroundColor: icon.bgColor }]}>
        <Ionicons name={icon.name} size={20} color={icon.color} />
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.userImageContainer}>
            <Image 
              source={{ uri: notification.user.avatar }} 
              style={styles.userImage} 
            />
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.notificationText}>
              <Text style={styles.userName}>{notification.user.name} </Text>
              {notification.content}
            </Text>
            <Text style={styles.timeText}>{notification.time}</Text>
          </View>
        </View>
        
        {notification.image && (
          <Image 
            source={{ uri: notification.image }} 
            style={styles.contentImage} 
          />
        )}
      </View>
      
      <TouchableOpacity 
        style={styles.optionsButton}
        onPress={() => onOptionPress && onOptionPress(notification)}
      >
        <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.secondaryText} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  unreadContainer: {
    backgroundColor: COLORS.highlight,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
  },
  userImageContainer: {
    marginRight: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    ...FONTS.body2,
    color: COLORS.text,
    flexWrap: 'wrap',
  },
  userName: {
    fontWeight: 'bold',
  },
  timeText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
    marginTop: 4,
  },
  contentImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginTop: 8,
    marginLeft: 50, // To align with the text
  },
  optionsButton: {
    padding: 5,
    justifyContent: 'center',
  },
});

export default NotificationItem;