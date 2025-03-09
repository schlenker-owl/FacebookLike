import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const { width } = Dimensions.get('window');

const VideoCard = ({ video, onVideoPress }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(video.likes || 0);
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: video.user.avatar || 'https://via.placeholder.com/40' }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.userName}>{video.user.name}</Text>
            <Text style={styles.timeAgo}>{video.timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.secondaryText} />
        </TouchableOpacity>
      </View>
      
      {/* Caption */}
      {video.caption && (
        <Text style={styles.caption}>{video.caption}</Text>
      )}
      
      {/* Video Thumbnail */}
      <TouchableOpacity 
        style={styles.videoContainer}
        onPress={() => onVideoPress && onVideoPress(video)}
      >
        <Image 
          source={{ uri: video.thumbnail }} 
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <View style={styles.playButton}>
          <Ionicons name="play" size={24} color={COLORS.background} />
        </View>
        
        <View style={styles.videoDuration}>
          <Text style={styles.durationText}>{video.duration}</Text>
        </View>
      </TouchableOpacity>
      
      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statsItem}>
          <Ionicons 
            name={isLiked ? "thumbs-up" : "thumbs-up-outline"} 
            size={16} 
            color={isLiked ? COLORS.primary : COLORS.secondaryText} 
          />
          <Text style={styles.statsText}>{likes}</Text>
        </View>
        
        <View style={styles.statsItem}>
          <Ionicons name="chatbubble-outline" size={16} color={COLORS.secondaryText} />
          <Text style={styles.statsText}>{video.comments}</Text>
        </View>
        
        <View style={styles.statsItem}>
          <Ionicons name="share-social-outline" size={16} color={COLORS.secondaryText} />
          <Text style={styles.statsText}>{video.shares}</Text>
        </View>
      </View>
      
      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={handleLike}
        >
          <Ionicons 
            name={isLiked ? "thumbs-up" : "thumbs-up-outline"} 
            size={22} 
            color={isLiked ? COLORS.primary : COLORS.secondaryText} 
          />
          <Text 
            style={[
              styles.actionText, 
              isLiked && { color: COLORS.primary }
            ]}
          >
            Like
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color={COLORS.secondaryText} />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={22} color={COLORS.secondaryText} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginBottom: 8,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  timeAgo: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  caption: {
    ...FONTS.body2,
    color: COLORS.text,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  videoContainer: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.lightGray,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  videoDuration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  durationText: {
    ...FONTS.body3,
    color: COLORS.background,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  actionText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
    marginLeft: 4,
  },
});

export default VideoCard;