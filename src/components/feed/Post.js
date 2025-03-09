import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      {/* Post Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri: post.user.avatar || 'https://via.placeholder.com/40' }} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.userName}>{post.user.name}</Text>
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.secondaryText} />
        </TouchableOpacity>
      </View>
      
      {/* Post Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>{post.content}</Text>
      </View>
      
      {/* Post Image (if any) */}
      {post.image && (
        <Image 
          source={{ uri: post.image }} 
          style={styles.contentImage}
          resizeMode="cover"
        />
      )}
      
      {/* Post Stats */}
      <View style={styles.stats}>
        <View style={styles.likesContainer}>
          <View style={styles.likeIconContainer}>
            <Ionicons name="thumbs-up" size={12} color={COLORS.background} />
          </View>
          <Text style={styles.statsText}>{likes}</Text>
        </View>
        <Text style={styles.statsText}>{post.comments || 0} comments</Text>
      </View>
      
      {/* Divider */}
      <View style={styles.divider} />
      
      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Ionicons 
            name={liked ? "thumbs-up" : "thumbs-up-outline"} 
            size={20} 
            color={liked ? COLORS.primary : COLORS.secondaryText} 
          />
          <Text 
            style={[
              styles.actionText, 
              { color: liked ? COLORS.primary : COLORS.secondaryText }
            ]}
          >
            Like
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color={COLORS.secondaryText} />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-redo-outline" size={20} color={COLORS.secondaryText} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
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
  postTime: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  content: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  contentText: {
    ...FONTS.body2,
    color: COLORS.text,
  },
  contentImage: {
    width: '100%',
    height: 300,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIconContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  statsText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginHorizontal: SIZES.padding,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  actionText: {
    ...FONTS.body3,
    marginLeft: 5,
  },
});

export default Post;