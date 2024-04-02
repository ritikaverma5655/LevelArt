// // ImagePickerExample.js

// import React, { useState } from 'react';
// import { Button, Image, View, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

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
//       <Button title="Edit Cover Photo" onPress={pickImage} style={styles.button}  />
//       {image && <Image source={{ uri: image }} style={styles.image} />}
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
//   button: {
//     backgroundColor: 'transparent', // Set background color to transparent
//     borderWidth: 1, // Add border
//     borderColor: '#841584', // Border color
//     borderRadius: 5, // Border radius
//     paddingHorizontal: 10, // Add horizontal padding
//     paddingVertical: 5, // Add vertical padding
//   },
// });

// export default ImagePickerExample;
