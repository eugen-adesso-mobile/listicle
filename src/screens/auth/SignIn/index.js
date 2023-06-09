import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignIn = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input isPassword={true} label="Password" placeholder="**********" />

        <Button style={styles.button} title="Sign In" />
        <Separator text="Or sign In with" />

        <GoogleLogin />
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={onSignUp} style={styles.footerLink}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
