// // ImagePickerExample.js

// import React, { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const ImagePickerExample = ({ handleImagePicked }: { handleImagePicked: (uri: string) => void }) => {
//     const [image, setImage] = useState<null |string>(null);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//       handleImagePicked(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity  onPress={pickImage} > 
//       <Image
//             source={require('../../assets/user.png')}
//           />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
          
//            </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });

// export default ImagePickerExample;
