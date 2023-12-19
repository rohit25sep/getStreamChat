import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatContextProvider from '../customHooks/ChatContext';
import {
  ChatRoomViewModel,
  ChatViewModel,
  GroupChatViewModel,
} from '../viewModel';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <ChatContextProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Group Chat" component={GroupChatViewModel} />
        <Stack.Screen name="All Chat" component={ChatViewModel} />
        <Stack.Screen name="ChatRoom" component={ChatRoomViewModel} />
      </Stack.Navigator>
    </ChatContextProvider>
  );
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};
