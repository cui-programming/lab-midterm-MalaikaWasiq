import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui'; // Fixed: using UI Text instead of RN Text
import { styles } from '../../styles/styles';

export default function AboutMe({ name, regNo }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{name}</Text>
      <Text style={styles.headerText}>{regNo}</Text>
    </View>
  );
}