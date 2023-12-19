import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useChatContext} from '../../customHooks/ChatContext';
import Colors from '../../theme/Colors';

const GroupChatScreen = () => {
  const {joinEventChatRoom} = useChatContext();
  return (
    <View style={style.container}>
      <Button
        title="Join the Group Chat"
        onPress={event => joinEventChatRoom(event)}
        color={Colors.planHub}
      />
    </View>
  );
};

export default GroupChatScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
