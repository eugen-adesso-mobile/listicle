import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {colors} from '../../utils/colors';

const CategoryBox = ({title, image, onPress, isFirst, isSelected}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? {marginLeft: 24} : {}]}>
      <View
        style={[
          styles.imageContainer,
          isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryBox;
