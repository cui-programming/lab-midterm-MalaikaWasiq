import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '../ui';
import { styles } from '../../styles/styles';

export default function SearchAndAdd({ azkaar = [], setAzkaar }) {
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const handleAdd = () => {
    if (newPhrase.trim() === '') return;
    
    const newItem = {
      id: Date.now().toString(),
      phrase: newPhrase,
      count: 0
    };
    
    setAzkaar([...azkaar, newItem]);
    setNewPhrase('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Search azkaar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <View style={styles.addContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0, marginRight: 8 }]}
          placeholder="Add new zikr..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </Button>
      </View>
    </View>
  );
}