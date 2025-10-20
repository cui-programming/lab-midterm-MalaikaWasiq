import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
import TeacherMessage from './src/components/custom/TeacherMessage';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
  const [azkaar, setAzkaar] = useState(initialAzkaar);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <TasbihList azkaar={azkaar} setAzkaar={setAzkaar} />
      <SearchAndAdd azkaar={azkaar} setAzkaar={setAzkaar} />
    </ScrollView>
  );
}