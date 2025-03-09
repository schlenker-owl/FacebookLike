import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const { width, height } = Dimensions.get('window');

const VideoPlayerModal = ({ visible, video, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="arrow-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Video</Text>
          <View style={{ width: 24 }} />
        </View>
        
        <View style={styles.videoContainer}>
          {/* In a real app, this would be a video player component */}
          <View style={styles.videoPlaceholder}>
            <Text style={styles.placeholderText}>Video Player</Text>
            <Text style={styles.videoTitle}>{video?.title}</Text>
          </View>
        </View>
        
        {video && (
          <View style={styles.videoInfo}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{video.user.name}</Text>
              <Text style={styles.timeAgo}>{video.timeAgo}</Text>
            </View>
            
            <Text style={styles.videoDescription}>{video.caption}</Text>
            
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Ionicons name="thumbs-up-outline" size={16} color={COLORS.secondaryText} />
                <Text style={styles.statText}>{video.likes} likes</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble-outline" size={16} color={COLORS.secondaryText} />
                <Text style={styles.statText}>{video.comments} comments</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingTop: 40, // Adjust for status bar
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.text,
  },
  videoContainer: {
    width: width,
    height: width * 0.6, // 16:9 aspect ratio
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlaceholder: {
    alignItems: 'center',
  },
  placeholderText: {
    ...FONTS.h3,
    color: '#fff',
    marginBottom: 10,
  },
  videoTitle: {
    ...FONTS.body2,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  videoInfo: {
    padding: SIZES.padding,
  },
  userInfo: {
    marginBottom: 10,
  },
  userName: {
    ...FONTS.h3,
    color: COLORS.text,
    marginBottom: 2,
  },
  timeAgo: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
  },
  videoDescription: {
    ...FONTS.body2,
    color: COLORS.text,
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  statText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
    marginLeft: 5,
  },
});

export default VideoPlayerModal;