import React, {useState} from 'react';
import {
  Channel,
  MessageList,
  MessageInput,
  useMessageInputContext,
  useMessageContext,
  AutoCompleteInput,
  Thread,
  MessageType,
  ChannelList,
  AutoCompleteSuggestionHeader,
} from 'stream-chat-react-native';
import CustomHeader from '../../components/CustomerHeader';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../assets/icons';
import {Constants} from '../../config/Constant';
import Colors from '../../theme/Colors';

interface ChatRoomProps {
  thread: MessageType | null | undefined;
  setThread: React.Dispatch<
    React.SetStateAction<MessageType | null | undefined>
  >;
  currentChannel: any;
}

const StreamButton = () => {
  const {sendMessage, text, imageUploads, fileUploads} =
    useMessageInputContext();
  const isDisabled = !text && !imageUploads.length && !fileUploads.length;

  return (
    <TouchableOpacity disabled={isDisabled} onPress={sendMessage}>
      <Image {...Icons.SEND} />
    </TouchableOpacity>
  );
};

const CustomAvatar = () => {
  const {message} = useMessageContext();
  console.log(message.user);

  return (
    <>
      <Image source={{uri: message?.user?.image}} />
    </>
  );
};

const CustomMessage = () => {
  const {message, isMyMessage} = useMessageContext();
  //   console.log('message', message.user?.name);

  return (
    <>
      <View
        style={[
          style.chatStyle,
          //   {backgroundColor: isMyMessage ? 'skyblue' : 'white'},
        ]}>
        <Image {...Icons.AVATAR} />
        {/* <Image source={{uri: message.user?.image}} /> */}
        <Text style={style.userName}>
          {message?.user?.name} {'\n'}
          <Text style={style.chatText}>{message?.text}</Text>
        </Text>
        <View style={style.flex} />
        {/* <TouchableOpacity>
          <Image {...Icons.DELETE} />
        </TouchableOpacity> */}
      </View>
    </>
  );
};

const CustomInput = () => {
  const {sendMessage, text} = useMessageInputContext();

  return (
    <View style={style.fullWidth}>
      {/* <ImageUploadPreview />
      <FileUploadPreview /> */}

      <View style={style.row}>
        <TouchableOpacity onPress={sendMessage}>
          <Image {...Icons.BACKWARD} />
        </TouchableOpacity>

        <AutoCompleteInput
          additionalTextInputProps={{
            placeholder: Constants.ENTER_MESSAGE,
            placeholderTextColor: Colors.placeholder,
            style: [style.inputText, style.fullWidth],
          }}
        />

        <TouchableOpacity onPress={sendMessage} disabled={!text}>
          <Image {...Icons.SEND} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const AutoCompleteSuggestionHeaderComponent = () => (
//   <AutoCompleteSuggestionHeader triggerType="emoji" />
// );

// const CustomMessageStatus = () => {
//   const {message} = useMessageContext();
//   return <Text>{message.readBy}</Text>;
// };
const MyNewComponent = (dateString: string) => (
  <Text>{`Hello World: ${dateString}`}</Text>
);

const onLongPressMessage = ({defaultHandler}) => {
  console.log('onLongPress');
  defaultHandler();
};
const ChatRoomScreen = (props: ChatRoomProps) => {
  const [channel, setChannel] = useState();

  const onBackPress = () => {
    if (props.thread) {
      props.setThread(undefined);
    } else if (!channel) {
      setChannel(undefined);
    }
  };

  console.log('this is it ', props);
  return (
    <View style={style.mainContainer}>
      {props.thread ? (
        <View style={style.threadContainer}>
          <View>
            <Text style={style.threadText}>{Constants.THREADS}</Text>
            <Text style={[style.chatText, style.threadCount]}>
              {props.thread?.reply_count} {Constants.THREADS}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onBackPress()}>
            <Image {...Icons.CROSS} />
          </TouchableOpacity>
        </View>
      ) : (
        <CustomHeader
          title={props.currentChannel?.data?.name}
          enableImage={true}
          // image={{uri: props.currentChannel?.data?.image}}
          image={Icons.PLANHUB}
        />
      )}
      {!channel ? (
        <Channel
          messageActions={({copyMessage, editMessage, isMyMessage}) =>
            isMyMessage
              ? [
                  copyMessage,
                  editMessage,
                  {
                    textStyle: {
                      color: 'red',
                      fontWeight: 'bold',
                    },
                  },
                ]
              : [copyMessage]
          }
          // AutoCompleteSuggestionHeader={AutoCompleteSuggestionHeaderComponent}
          // autoCompleteTriggerSettings={() => ({'/': ''})}
          //MessageStatus={() => <CustomMessageStatus />}
          // DateHeader={MyNewComponent}
          // AutoCompleteSuggestionHeader={({queryText, triggerType}) => {
          //   if (triggerType === 'command') {
          //     return <Text>Command Header Component</Text>;
          //   } else if (triggerType === 'emoji') {
          //     return <Text>Emoji Header Component</Text>;
          //   } else {
          //     return (
          //       <AutoCompleteSuggestionHeader
          //         queryText={queryText}
          //         triggerType={triggerType}
          //       />
          //     );
          //   }
          // }}
          thread={props.thread}
          threadList={!!props.thread}
          channel={props.currentChannel}
          disableTypingIndicator
          enforceUniqueReaction
          initialScrollToFirstUnreadMessage
          MessageAvatar={CustomAvatar}
          // MessageSimple={CustomMessage}
          // Input={CustomInput}
        >
          {props?.thread ? (
            <Thread />
          ) : (
            <>
              <MessageList onThreadSelect={props.setThread} />
              {/* <View style={style.upperMessageInput}>
                <View style={style.messageInput}>
                  <MessageInput SendButton={StreamButton} />
                </View>
              </View> */}
              <MessageInput SendButton={StreamButton} />
            </>
          )}
        </Channel>
      ) : (
        <></>
      )}
    </View>
  );
};

export default ChatRoomScreen;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: '20%',
    backgroundColor: Colors.white,
  },
  chatStyle: {
    padding: 10,
    margin: 6,
    flexDirection: 'row',
  },
  userName: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
    marginLeft: 10,
  },
  chatText: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.black,
  },
  upperMessageInput: {
    paddingHorizontal: 16,
  },
  messageInput: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: Colors.lightGrey,
  },
  fullWidth: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    height: 30,
  },
  inputText: {
    fontWeight: '400',
    fontSize: 14,
    // color: '#BEC1C5',
  },
  flex: {
    flex: 1,
  },
  threadText: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.black,
  },
  threadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.jetGrey,
  },
  threadCount: {
    color: Colors.granite,
  },
});
