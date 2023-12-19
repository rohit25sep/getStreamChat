import React, {useEffect, useState} from 'react';
import ChatRoomScreen from '../views/chat/ChatRoomScreen';
import {useChatContext} from '../customHooks/ChatContext';
import {MessageType} from 'stream-chat-react-native';
import { getCircularReplacer } from '../utils';

const ChatRoomViewModel = ({navigation}: any) => {
  const {currentChannel} = useChatContext();
  const [thread, setThread] = useState<MessageType | null>();
  const getMember = async () => {
    const data = await currentChannel.queryMembers({}, {}, {});
    //const data = await currentChannel.queryMembers({}, {}, {});

    //console.log(JSON.stringify(data));
  };
  
console.log(JSON.stringify(currentChannel.state.messageSets, getCircularReplacer()));
  useEffect(() => {
    getMember();
    navigation.setOptions({
      title: currentChannel?.data?.name || 'Channel',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChannel?.data?.name]);

  return <ChatRoomScreen {...{currentChannel, thread, setThread}} />;
};

export default ChatRoomViewModel;
