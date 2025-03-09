import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

// Components
import Post from '../../components/feed/Post';
import CreatePostCard from '../../components/feed/CreatePostCard';
import StorySection from '../../components/feed/StorySection';

// Mock data
const MOCK_CURRENT_USER = {
  id: 'user-1',
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};

const MOCK_STORIES = [
  {
    id: 'story-1',
    user: {
      id: 'user-2',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    image: 'https://source.unsplash.com/random/300x500/?nature',
  },
  {
    id: 'story-2',
    user: {
      id: 'user-3',
      name: 'Mike Brown',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    image: 'https://source.unsplash.com/random/300x500/?city',
  },
  {
    id: 'story-3',
    user: {
      id: 'user-4',
      name: 'Emily Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    image: 'https://source.unsplash.com/random/300x500/?food',
  },
  {
    id: 'story-4',
    user: {
      id: 'user-5',
      name: 'David Clark',
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    },
    image: 'https://source.unsplash.com/random/300x500/?travel',
  },
];

const MOCK_POSTS = [
  {
    id: 'post-1',
    user: {
      id: 'user-2',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    time: '2 hours ago',
    content: 'Just had an amazing day at the beach! 🏖️ #summervibes',
    image: 'https://source.unsplash.com/random/800x600/?beach',
    likes: 42,
    comments: 7,
  },
  {
    id: 'post-2',
    user: {
      id: 'user-3',
      name: 'Mike Brown',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    time: '5 hours ago',
    content: 'Check out my new photography setup! 📸 Excited to start this journey.',
    image: 'https://source.unsplash.com/random/800x600/?camera',
    likes: 28,
    comments: 3,
  },
  {
    id: 'post-3',
    user: {
      id: 'user-4',
      name: 'Emily Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    time: 'Yesterday',
    content: 'Finally finished reading this book. Highly recommended for anyone interested in personal growth!',
    likes: 16,
    comments: 2,
  },
  {
    id: 'post-4',
    user: {
      id: 'user-5',
      name: 'David Clark',
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    },
    time: '2 days ago',
    content: 'My hiking trip to the mountains was absolutely breathtaking! 🏔️',
    image: 'https://source.unsplash.com/random/800x600/?mountains',
    likes: 76,
    comments: 14,
  },
];

const FeedScreen = () => {
  const [posts, setPosts] = useState(MOCK_POSTS);
  
  const handleCreatePost = () => {
    // In a real app, this would open a modal or navigate to a create post screen
    console.log('Create post pressed');
  };
  
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>facebook</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="search" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="chatbubbles" size={22} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <CreatePostCard onCreatePost={handleCreatePost} user={MOCK_CURRENT_USER} />
            <StorySection stories={MOCK_STORIES} currentUser={MOCK_CURRENT_USER} />
          </>
        )}
        contentContainerStyle={styles.feedContainer}
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
    paddingVertical: SIZES.padding / 2,
    backgroundColor: COLORS.background,
  },
  headerTitle: {
    ...FONTS.h1,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerButton: {
    backgroundColor: COLORS.lightGray,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  feedContainer: {
    padding: 8,
  },
});

export default FeedScreen;