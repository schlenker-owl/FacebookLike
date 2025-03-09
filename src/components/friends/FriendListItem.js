import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const FriendListItem = ({ friend, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress && onPress(friend)}
    >
      <Image 
        source={{ uri: friend.avatar || 'https://via.placeholder.com/50' }} 
        style={styles.avatar} 
      />
      
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{friend.name}</Text>
      </View>
      
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.secondaryText} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SIZES.padding,
    marginBottom: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    ...FONTS.h3,
    color: COLORS.text,
  },
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FriendListItem;