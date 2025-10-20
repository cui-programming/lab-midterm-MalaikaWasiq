import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';

export default function TasbihList({ azkaar = [], setAzkaar }) {
  const increment = (id) => {
    const newAzkaar = azkaar.map(item => 
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setAzkaar(newAzkaar);
  };

  const decrement = (id) => {
    const newAzkaar = azkaar.map(item => 
      item.id === id ? { ...item, count: Math.max(0, item.count - 1) } : item
    );
    setAzkaar(newAzkaar);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      {azkaar.map((item) => (
        <View key={item.id} style={styles.itemRow}>
          <Text style={styles.itemName}>{item.phrase}</Text>
          <Text style={styles.counter}>{item.count}</Text>
          <Button style={styles.counterButton} onPress={() => decrement(item.id)}>
            <Text style={styles.buttonText}>-</Text>
          </Button>
          <Button style={styles.counterButton} onPress={() => increment(item.id)}>
            <Text style={styles.buttonText}>+</Text>
          </Button>
        </View>
      ))}
    </View>
  );
}