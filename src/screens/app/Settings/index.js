import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Settings = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Settings Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
