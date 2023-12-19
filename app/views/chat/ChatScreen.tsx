import React from 'react';
import {ChannelList, ChannelPreviewMessenger} from 'stream-chat-react-native';
import {Channel} from 'stream-chat';
import CustomHeader from '../../components/CustomerHeader';
import {View} from 'react-native';
import {Constants} from '../../config/Constant';

interface ChatScreenProps {
  onSelect: (channel: Channel) => void;
}

const CustomListItem = (props: any) => {
  const {unread} = props;
  const backgroundColor = unread ? '#e6f7' : '#fff';
  return (
    <View style={{backgroundColor}}>
      <ChannelPreviewMessenger {...props} />
    </View>
  );
};

// const CustomPreviewTitle = ({ channel }) => (
//     <Text>
//       {channel.data.customProperty} - {channel.data.name}
//     </Text>
//   );

const filters = {
  members: {
    $in: [Constants.chatUserId],
  },
};
const ChatScreen = (props: ChatScreenProps) => {
  return (
    <>
      <CustomHeader title="All Chat" enableSearch={true} />
      <ChannelList
        onSelect={props.onSelect}
        filters={filters}
        Preview={CustomListItem}
      />
    </>
  );
};

export default ChatScreen;
