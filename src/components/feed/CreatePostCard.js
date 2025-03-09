import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const CreatePostCard = ({ onCreatePost, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image 
          source={{ uri: user?.avatar || 'https://via.placeholder.com/40' }} 
          style={styles.avatar} 
        />
        <TouchableOpacity 
          style={styles.postInput}
          onPress={() => onCreatePost && onCreatePost()}
        >
          <Text style={styles.inputPlaceholder}>What's on your mind?</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="videocam" size={20} color="#E42645" />
          <Text style={styles.actionText}>Live Video</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="images" size={20} color="#41B35D" />
          <Text style={styles.actionText}>Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="happy" size={20} color="#F8C03E" />
          <Text style={styles.actionText}>Feeling/Activity</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postInput: {
    flex: 1,
    height: 40,
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  inputPlaceholder: {
    ...FONTS.body2,
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
    padding: SIZES.padding,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    ...FONTS.body3,
    color: COLORS.secondaryText,
    marginLeft: 5,
  },
});

export default CreatePostCard;