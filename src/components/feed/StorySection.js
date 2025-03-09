import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const StoryCard = ({ story, isCreateStory = false }) => {
  return (
    <TouchableOpacity style={styles.storyCard}>
      <Image 
        source={{ uri: story?.image || 'https://via.placeholder.com/150' }} 
        style={styles.storyImage} 
      />
      
      {isCreateStory ? (
        <View style={styles.createStoryButton}>
          <Ionicons name="add-circle" size={30} color={COLORS.primary} />
        </View>
      ) : (
        <View style={styles.storyUserContainer}>
          <Image 
            source={{ uri: story?.user?.avatar || 'https://via.placeholder.com/40' }} 
            style={styles.storyUserAvatar} 
          />
        </View>
      )}
      
      <Text style={styles.storyText}>
        {isCreateStory ? 'Create Story' : story?.user?.name}
      </Text>
    </TouchableOpacity>
  );
};

const StorySection = ({ stories = [], currentUser }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      >
        {/* Create Story Card */}
        <StoryCard 
          isCreateStory={true} 
          story={{ 
            image: currentUser?.avatar || 'https://via.placeholder.com/150'
          }} 
        />
        
        {/* User Stories */}
        {stories.map((story, index) => (
          <StoryCard key={index} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    borderRadius: SIZES.radius,
    marginBottom: 8,
    overflow: 'hidden',
  },
  storiesContainer: {
    padding: SIZES.padding,
  },
  storyCard: {
    width: 110,
    height: 190,
    borderRadius: 12,
    marginRight: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  createStoryButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 20,
    padding: 2,
  },
  storyUserContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderWidth: 3,
    borderColor: COLORS.primary,
    borderRadius: 20,
  },
  storyUserAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  storyText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    ...FONTS.body3,
    color: COLORS.background,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default StorySection;