import React from 'react';
import { Pressable } from 'react-native';

export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress} style={style} {...rest}>
      {children}
    </Pressable>
  );
}