import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  back: {
    height: 24,
    width: 24,
  },
  planHub: {
    height: 47,
    width: 48,
    margin: 4,
  },
  backward: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 10,
  },
  avatar: {
    height: 32,
    width: 32,
  },
  delete: {
    height: 16,
    width: 16,
  },
});

export const Icons = {
  BACK: {
    source: require('../icons/Back.png'),
    style: styles.back,
  },
  SEARCH: {
    source: require('../icons/Search.png'),
    style: styles.back,
  },
  SEND: {
    source: require('../icons/Send.png'),
    style: styles.back,
  },
  PLANHUB: {
    source: require('../icons/PlanHub.png'),
    style: styles.planHub,
  },
  BACKWARD: {
    source: require('../icons/Backward.png'),
    style: styles.backward,
  },
  AVATAR: {
    source: require('../icons/3d_Avatar.png'),
    style: styles.avatar,
  },
  DELETE: {
    source: require('../icons/Delete.png'),
    style: styles.delete,
  },
  CROSS: {
    source: require('../icons/Cross.png'),
    style: styles.delete,
  },
};
