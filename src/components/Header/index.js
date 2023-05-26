import React, { useState } from "react";
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Input from "../Input";

const Header = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showLogout,
  showSearch,
  keyword,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}

        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput && (
        <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword" />
      )}
    </View>
  );
};

export default Header;
