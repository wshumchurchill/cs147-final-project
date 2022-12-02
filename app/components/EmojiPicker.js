import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="none" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: 100,
    width: '78.85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#007BC0',
    borderWidth: 2,
    borderRadius: 18,
    // borderBottomLeftRadius: 18,
    // borderBottomRightRadius: 18,
    position: 'absolute',
    bottom: 252,
    
    left: 44,

  },
  titleContainer: {
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    // borderColor: 'black',
    // borderWidth: 2,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
  },
});
