import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

// Components
import NotificationGroup from '../../components/notifications/NotificationGroup';
import NotificationOptionsMenu from '../../components/notifications/NotificationOptionsMenu';
import NotificationSettings from '../../components/notifications/NotificationSettings';

// Mock Data
const MOCK_NOTIFICATIONS = [
  {
    title: 'Today',
    data: [
      {
        id: 'notif-1',
        type: 'like',
        user: {
          id: 'user-1',
          name: 'Sarah Johnson',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        content: 'liked your post.',
        time: '3h ago',
        unread: true,
        image: 'https://source.unsplash.com/random/800x600/?nature',
      },
      {
        id: 'notif-2',
        type: 'comment',
        user: {
          id: 'user-2',
          name: 'Mike Brown',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        },
        content: 'commented on your photo: "Great shot!"',
        time: '5h ago',
        unread: true,
      },
    ]
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 'notif-3',
        type: 'friend_request',
        user: {
          id: 'user-3',
          name: 'Emily Wilson',
          avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        },
        content: 'sent you a friend request.',
        time: '1d ago',
        unread: false,
      },
      {
        id: 'notif-4',
        type: 'friend_accepted',
        user: {
          id: 'user-4',
          name: 'David Clark',
          avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
        },
        content: 'accepted your friend request.',
        time: '1d ago',
        unread: false,
      },
    ]
  },
  {
    title: 'This Week',
    data: [
      {
        id: 'notif-5',
        type: 'birthday',
        user: {
          id: 'user-5',
          name: 'Jessica Adams',
          avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
        },
        content: 'has a birthday today! Wish her a happy birthday.',
        time: '2d ago',
        unread: false,
      },
      {
        id: 'notif-6',
        type: 'event',
        user: {
          id: 'user-6',
          name: 'Alex Turner',
          avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
        },
        content: 'invited you to an event: "Summer BBQ Party"',
        time: '3d ago',
        unread: false,
      },
      {
        id: 'notif-7',
        type: 'group',
        user: {
          id: 'user-7',
          name: 'Tech Enthusiasts Group',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        },
        content: 'posted a new update: "Weekly tech news roundup"',
        time: '5d ago',
        unread: false,
      },
    ]
  },
];

const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  
  const handleNotificationPress = (notification) => {
    // Mark as read and navigate to the relevant screen
    if (notification.unread) {
      markNotificationAsRead(notification.id);
    }
    
    // Navigate based on notification type
    console.log(`Navigate based on notification type: ${notification.type}`);
  };
  
  const handleOptionPress = (notification) => {
    setSelectedNotification(notification);
    setOptionsVisible(true);
  };
  
  const handleSettingsPress = () => {
    console.log('Navigate to notification settings');
    // navigation.navigate('NotificationSettings');
  };
  
  const markNotificationAsRead = (notificationId) => {
    const updatedNotifications = notifications.map(group => ({
      ...group,
      data: group.data.map(notification => 
        notification.id === notificationId 
          ? { ...notification, unread: false }
          : notification
      )
    }));
    
    setNotifications(updatedNotifications);
  };
  
  const handleMarkAsRead = () => {
    if (selectedNotification) {
      markNotificationAsRead(selectedNotification.id);
    }
    setOptionsVisible(false);
  };
  
  const handleHideNotification = () => {
    if (selectedNotification) {
      const updatedNotifications = notifications.map(group => ({
        ...group,
        data: group.data.filter(notification => notification.id !== selectedNotification.id)
      })).filter(group => group.data.length > 0);
      
      setNotifications(updatedNotifications);
    }
    setOptionsVisible(false);
  };
  
  const handleTurnOffNotifications = () => {
    console.log('Turn off notifications like this');
    setOptionsVisible(false);
  };
  
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Notifications</Text>
      <TouchableOpacity style={styles.headerButton}>
        <Ionicons name="search" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      
      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={() => (
          <View>
            <NotificationSettings onSettingsPress={handleSettingsPress} />
            
            {notifications.map((group, index) => (
              <NotificationGroup
                key={`group-${index}`}
                title={group.title}
                notifications={group.data}
                onNotificationPress={handleNotificationPress}
                onOptionPress={handleOptionPress}
              />
            ))}
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      
      <NotificationOptionsMenu
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
        onMarkAsRead={handleMarkAsRead}
        onHide={handleHideNotification}
        onTurnOff={handleTurnOffNotifications}
      />
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
});

export default NotificationsScreen;