import React from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';

const ProductDetails = ({route}) => {
  const {product} = route?.params || {};
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{uri: product?.image}} />
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require('../../../assets/images/bookmark_blue.png')}
          />
        </Pressable>
        <Button title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
