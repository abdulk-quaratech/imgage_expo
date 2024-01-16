import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View, Text, PermissionsAndroid
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function FileUpload() {
  const [response, setResponse] = React.useState(null);

  const onButtonPress = React.useCallback(() => {

    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Camera',
      message: 'This app would like to take your pictures.',
      buttonPositive: 'Please accept bare mortal',
    }).then((res) => {
      ImagePicker.launchImageLibrary(
        {
          selectionLimit: 0,
          mediaType: 'photo',
          includeBase64: false,
          includeExtra: false
        }
        ,
        setResponse
      );
    }).catch((error) => {
      console.error('Permission error: ', error);
      alert('Sorry Something Went Wrong ')
    });

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>

        <Text
          key={'Select Image'}
          style={styles.button}
          onPress={() => onButtonPress()}>
          Pick Image
        </Text>

        <View style={styles.imageContainer}>
          {response?.assets?.length > 0 &&
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.image}
              source={{ uri: response?.assets[0].uri }}
            />
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },

  header: {
    color: '#000000',
    width: '100%',
    textAlign: 'center',
    padding: 5,
    margin: 5,
    marginTop: 50,
  },

  imageContainer: {
    width: '95%',
    height: 120,
    padding: 10,
    backgroundColor: '#f8f8f8',
    margin: 10,
    borderColor: '#666666',
    borderRadius: 4,
    borderWidth: 1
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#116611',
  },
  button: {
    backgroundColor: '#116611',
    color: '#ffffff',
    fontWeight: '600',
    width: '95%',
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderColor: '#666666',
  },
});