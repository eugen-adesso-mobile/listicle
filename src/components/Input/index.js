import React, {useState} from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const Input = ({
  label,
  type,
  options,
  isPassword,
  value,
  onChangeText,
  style,
  placeholder,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect = opt => {
    onChangeText(opt);
    setIsPickerModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'picker' ? (
        <Pressable
          onPress={() => setIsPickerModalVisible(true)}
          style={styles.inputContainer}>
          {value ? (
            <Text style={[styles.input, style]}>{value?.title}</Text>
          ) : (
            <Text style={[styles.placeholder, style]}>{placeholder}</Text>
          )}
          <Image
            style={styles.arrow}
            source={require('../../assets/images/arrow.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            style={[styles.input, style]}
            {...props}
          />
          {isPassword && (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require('../../assets/images/eye.png')
                    : require('../../assets/images/eye_closed.png')
                }
              />
            </Pressable>
          )}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsPickerModalVisible(false)}
          style={styles.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options</Text>
            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }
              const selected = value?.id === opt?.id;
              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[
                    styles.optionsText,
                    selected ? styles.selectedOption : {},
                  ]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Input;
