import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Icons} from '../assets/icons';
import {useNavigation} from '@react-navigation/native';
import Colors from '../theme/Colors';

interface HeaderProps {
  title: string | undefined;
  enableSearch?: boolean;
  enableImage?: boolean;
  image?: any;
}

const CustomHeader = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image {...Icons.BACK} />
      </TouchableOpacity>

      {props.enableImage && <Image {...props.image} />}

      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.emptyView} />
      {props.enableSearch && (
        <TouchableOpacity>
          <Image {...Icons.SEARCH} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.jetGrey,
  },
  titleText: {
    fontSize: 22,
    color: Colors.jetGrey,
    fontWeight: '500',
  },
  emptyView: {
    flex: 1,
  },
});
