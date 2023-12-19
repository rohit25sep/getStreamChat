import React from 'react';
import {Channel} from 'stream-chat';
import ChatScreen from '../views/chat/ChatScreen';
import {useChatContext} from '../customHooks/ChatContext';

const ChatViewModel = ({navigation}: any) => {
  const {setCurrentChannel} = useChatContext();
  
  const onSelect = (channel: Channel) => {
    setCurrentChannel(channel);
    navigation.navigate('ChatRoom');
  };
  return <ChatScreen {...{onSelect}} />;
};

export default ChatViewModel;
