import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

// Components
import FriendRequestCard from '../../components/friends/FriendRequestCard';
import FriendSuggestionCard from '../../components/friends/FriendSuggestionCard';
import FriendListItem from '../../components/friends/FriendListItem';
import FriendCategoryHeader from '../../components/friends/FriendCategoryHeader';

// Mock data
const MOCK_FRIEND_REQUESTS = [
  {
    id: 'request-1',
    user: {
      id: 'user-6',
      name: 'Alex Turner',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    mutualFriends: 3,
    timeAgo: '2 days ago',
  },
  {
    id: 'request-2',
    user: {
      id: 'user-7',
      name: 'Sophia Martinez',
      avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    },
    mutualFriends: 5,
    timeAgo: '5 days ago',
  },
];

const MOCK_FRIEND_SUGGESTIONS = [
  {
    id: 'suggestion-1',
    user: {
      id: 'user-8',
      name: 'Daniel Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/57.jpg',
    },
    mutualFriends: 7,
  },
  {
    id: 'suggestion-2',
    user: {
      id: 'user-9',
      name: 'Olivia Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    },
    mutualFriends: 2,
  },
  {
    id: 'suggestion-3',
    user: {
      id: 'user-10',
      name: 'James Miller',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    mutualFriends: 4,
  },
];

const MOCK_FRIENDS = [
  {
    id: 'friend-1',
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 'friend-2',
    name: 'Mike Brown',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    id: 'friend-3',
    name: 'Emily Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    id: 'friend-4',
    name: 'David Clark',
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
  {
    id: 'friend-5',
    name: 'Jessica Adams',
    avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
  },
];

const FriendsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendRequests, setFriendRequests] = useState(MOCK_FRIEND_REQUESTS);
  const [friendSuggestions, setFriendSuggestions] = useState(MOCK_FRIEND_SUGGESTIONS);
  const [friends, setFriends] = useState(MOCK_FRIENDS);
  
  const handleAcceptRequest = (request) => {
    // Logic for accepting friend request
    setFriendRequests(friendRequests.filter(req => req.id !== request.id));
    // Add to friends list
    setFriends([
      ...friends,
      {
        id: request.user.id,
        name: request.user.name,
        avatar: request.user.avatar,
      },
    ]);
  };
  
  const handleDeclineRequest = (request) => {
    // Logic for declining friend request
    setFriendRequests(friendRequests.filter(req => req.id !== request.id));
  };
  
  const handleAddSuggestion = (suggestion) => {
    // Logic for sending friend request from suggestion
    setFriendSuggestions(friendSuggestions.filter(sug => sug.id !== suggestion.id));
    // In a real app, this would add to a "sent requests" state
  };
  
  const handleRemoveSuggestion = (suggestion) => {
    // Logic for removing suggestion
    setFriendSuggestions(friendSuggestions.filter(sug => sug.id !== suggestion.id));
  };
  
  const handleFriendPress = (friend) => {
    // Navigate to friend's profile
    console.log(`Navigate to ${friend.name}'s profile`);
    // navigation.navigate('Profile', { userId: friend.id });
  };
  
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Friends</Text>
      <TouchableOpacity style={styles.headerButton}>
        <Ionicons name="search" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );
  
  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={20} color={COLORS.secondaryText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search friends"
          placeholderTextColor={COLORS.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
  
  const renderFriendRequests = () => (
    <>
      <FriendCategoryHeader 
        title="Friend Requests" 
        count={friendRequests.length} 
        actionText="See All"
        onAction={() => console.log('See all friend requests')}
      />
      
      {friendRequests.map(request => (
        <FriendRequestCard
          key={request.id}
          request={request}
          onAccept={handleAcceptRequest}
          onDecline={handleDeclineRequest}
        />
      ))}
    </>
  );
  
  const renderFriendSuggestions = () => (
    <>
      <FriendCategoryHeader 
        title="People You May Know" 
        actionText="See All"
        onAction={() => console.log('See all suggestions')}
      />
      
      {friendSuggestions.map(suggestion => (
        <FriendSuggestionCard
          key={suggestion.id}
          suggestion={suggestion}
          onAdd={handleAddSuggestion}
          onRemove={handleRemoveSuggestion}
        />
      ))}
    </>
  );
  
  const renderAllFriends = () => (
    <>
      <FriendCategoryHeader 
        title="All Friends" 
        count={friends.length}
      />
      
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friend={friend}
          onPress={handleFriendPress}
        />
      ))}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearchBar()}
      
      <FlatList
        data={[]} // Empty data array because we're using ListHeaderComponent for all content
        renderItem={null}
        ListHeaderComponent={() => (
          <View>
            {renderFriendRequests()}
            <View style={styles.sectionDivider} />
            {renderFriendSuggestions()}
            <View style={styles.sectionDivider} />
            {renderAllFriends()}
          </View>
        )}
        showsVerticalScrollIndicator={false}
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
  searchContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    ...FONTS.body2,
    color: COLORS.text,
  },
  sectionDivider: {
    height: 8,
    backgroundColor: COLORS.lightGray,
  },
});

export default FriendsScreen;