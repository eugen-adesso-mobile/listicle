import React from 'react';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';

const ProductDetails = ({route, navigation}) => {
  const {product} = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    // Make a phone call
    const phone = '127282827';
    Linking.openURL(`tel:${phone}`).then(r => r);
    // Send an email
    const email = 'info@habrony.de';
    Linking.openURL(`mailto:${email}`).then(r => r);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image style={styles.image} source={{uri: product?.image}} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/images/back.png')}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require('../../../assets/images/bookmark_blue.png')}
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
