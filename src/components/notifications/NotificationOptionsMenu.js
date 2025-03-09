import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS, SIZES } from '../../styles/theme';

const NotificationOptionsMenu = ({ visible, onClose, onMarkAsRead, onHide, onTurnOff }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.option} onPress={onMarkAsRead}>
                <Ionicons name="checkmark-circle-outline" size={24} color={COLORS.text} />
                <Text style={styles.optionText}>Mark as read</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.option} onPress={onHide}>
                <Ionicons name="eye-off-outline" size={24} color={COLORS.text} />
                <Text style={styles.optionText}>Remove this notification</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.option} onPress={onTurnOff}>
                <Ionicons name="notifications-off-outline" size={24} color={COLORS.text} />
                <Text style={styles.optionText}>Turn off notifications like this</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '80%',
    backgroundColor: COLORS.background,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  optionText: {
    ...FONTS.body2,
    color: COLORS.text,
    marginLeft: 15,
  },
});

export default NotificationOptionsMenu;