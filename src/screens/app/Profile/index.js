import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Profile Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
