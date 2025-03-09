import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

// Components
import VideoCard from '../../components/watch/VideoCard';
import VideoCategoryTabs from '../../components/watch/VideoCategoryTabs';
import VideoPlayerModal from '../../components/watch/VideoPlayerModal';
import LiveBadge from '../../components/watch/LiveBadge';

// Mock Data
const VIDEO_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'foryou', name: 'For You' },
  { id: 'live', name: 'Live' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'following', name: 'Following' },
  { id: 'saved', name: 'Saved' },
];

const MOCK_VIDEOS = [
  {
    id: 'video-1',
    user: {
      id: 'user-1',
      name: 'Tech Review Channel',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    title: 'Latest iPhone 15 Pro Review - Is it worth the upgrade?',
    caption: 'Check out my in-depth review of the latest iPhone 15 Pro. Let me know what you think in the comments!',
    thumbnail: 'https://source.unsplash.com/random/800x600/?iphone',
    duration: '12:45',
    timeAgo: '3 hours ago',
    likes: 1243,
    comments: 89,
    shares: 32,
    isLive: false,
    category: 'foryou',
  },
  {
    id: 'video-2',
    user: {
      id: 'user-2',
      name: 'Gaming World',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    title: 'LIVE: Championship tournament finals',
    caption: 'Watch the finals of our gaming championship! Who will win the grand prize?',
    thumbnail: 'https://source.unsplash.com/random/800x600/?gaming',
    duration: 'LIVE',
    timeAgo: 'Now',
    likes: 876,
    comments: 234,
    shares: 56,
    isLive: true,
    category: 'live',
  },
  {
    id: 'video-3',
    user: {
      id: 'user-3',
      name: 'Cooking Adventures',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    title: 'Easy 15-minute meal recipes for busy people',
    caption: 'Here are 5 quick and delicious recipes you can make in just 15 minutes!',
    thumbnail: 'https://source.unsplash.com/random/800x600/?cooking',
    duration: '8:32',
    timeAgo: '1 day ago',
    likes: 3425,
    comments: 143,
    shares: 287,
    isLive: false,
    category: 'foryou',
  },
  {
    id: 'video-4',
    user: {
      id: 'user-4',
      name: 'Travel Diaries',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    title: 'Hidden gems in Barcelona you must visit',
    caption: 'Discovered these amazing spots in Barcelona that most tourists never see!',
    thumbnail: 'https://source.unsplash.com/random/800x600/?barcelona',
    duration: '15:20',
    timeAgo: '2 days ago',
    likes: 2198,
    comments: 76,
    shares: 124,
    isLive: false,
    category: 'following',
  },
  {
    id: 'video-5',
    user: {
      id: 'user-5',
      name: 'Fitness with Alex',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    },
    title: 'LIVE: 30-minute full body workout - Join me!',
    caption: 'Let\'s get fit together with this 30-minute workout routine! No equipment needed.',
    thumbnail: 'https://source.unsplash.com/random/800x600/?workout',
    duration: 'LIVE',
    timeAgo: 'Now',
    likes: 532,
    comments: 146,
    shares: 43,
    isLive: true,
    category: 'live',
  },
];

const WatchScreen = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const filteredVideos = activeCategory === 'all'
    ? MOCK_VIDEOS
    : MOCK_VIDEOS.filter(video => video.category === activeCategory);
  
  const handleVideoPress = (video) => {
    setSelectedVideo(video);
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Watch</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="person" size={22} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="search" size={22} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
  
  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <Ionicons name="search" size={20} color={COLORS.secondaryText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search videos"
          placeholderTextColor={COLORS.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderSearchBar()}
      
      <VideoCategoryTabs
        categories={VIDEO_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      
      <FlatList
        data={filteredVideos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <VideoCard 
            video={item} 
            onVideoPress={handleVideoPress}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      
      <VideoPlayerModal
        visible={modalVisible}
        video={selectedVideo}
        onClose={handleCloseModal}
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
  searchContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.background,
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
  listContainer: {
    padding: 8,
  },
});

export default WatchScreen;