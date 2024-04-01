// import React, { useState } from 'react';
// import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// const ProfileScreen = () => {
 
//   // Function to handle editing profile
//   const handleEditProfile = () => {
//     // Implement logic for editing profile
//   };

//   // Function to handle editing cover photo
//   const handleEditCoverPhoto = async () => {
//     try {
//       // Request permission to access the device's photo gallery
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//         Alert.alert('Permission Denied', 'Permission to access the photo gallery was denied.');
//         return;
//       }
  
//       // Launch the image picker and await the result
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1], // Aspect ratio (1:1 for square image)
//         quality: 1, // Image quality
//       })as ImagePicker.ImagePickerSuccessResult;
  
//       // Handle the selected image
//       if (!result.canceled && result.hasOwnProperty('uri')) {
//         // Do something with the selected image (e.g., upload it to server)
//         console.log(result.hasOwnProperty('uri'));
//       }
//     } catch (error) {
//       console.error('Error selecting image from gallery:', error);
//     }
//   };
  
//   return (
//     <ScrollView style={styles.container}>
//       {/* Cover Photo */}
//       <TouchableOpacity onPress={handleEditCoverPhoto}>
//         <Image
//           style={styles.coverPhoto}
//           source={require('../../assets/user.png')} // Replace 'cover_photo_url' with the actual URL of the cover photo
//         />
//         <Text style={styles.editCoverText}>Edit Cover Photo</Text>
//       </TouchableOpacity>

//       {/* Profile Picture */}
//       <TouchableOpacity onPress={handleEditProfile} style={styles.profilePictureContainer}>
//         <Image
//           style={styles.profilePicture}
//           source={require('../../assets/user.png')}// Replace 'profile_picture_url' with the actual URL of the profile picture
//         />
//       </TouchableOpacity>

//       {/* User Information */}
//       <View style={styles.userInfoContainer}>
//         <Text style={styles.username}>John Doe</Text>
//         <Text style={styles.bio}>Description about the user goes here...</Text>
//       </View>

//       {/* Options */}
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Posts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Photos</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Friends</Text>
//         </TouchableOpacity>
//         {/* Add more options as needed */}
//       </View>

//       {/* Posts */}
//       <View style={styles.postsContainer}>
//         {/* Render posts here */}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   coverPhoto: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   editCoverText: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   profilePictureContainer: {
//     alignItems: 'center',
//     position: 'absolute',
//     top: 150,
//     left: 20,
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   userInfoContainer: {
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   bio: {
//     fontSize: 16,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//     marginTop: 10,
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 10,
//   },
//   option: {
//     paddingHorizontal: 20,
//   },
//   optionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   postsContainer: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
// });

// export default ProfileScreen;
// import React, { useState } from 'react';
// import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// const ProfileScreen = () => {
//   const [profilePictureUri, setProfilePictureUri] = useState<string | null>(null); // Profile picture URI
//   const [coverPhotoUri, setCoverPhotoUri] = useState<string | null>(null); // Cover photo URI

//   // Function to handle editing profile
//   const handleEditProfile = () => {
//     // Implement logic for editing profile
//   };

//   // Function to handle editing cover photo
//   const handleEditCoverPhoto = async () => {
//     try {
//       // Request permission to access the device's photo gallery
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//         Alert.alert('Permission Denied', 'Permission to access the photo gallery was denied.');
//         return;
//       }

//       // Launch the image picker and await the result
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [16, 9], // Aspect ratio (16:9 for cover photo)
//         quality: 1, // Image quality
//       }) as ImagePicker.ImagePickerSuccessResult;

//       // Handle the selected image
//       if (result && !result.canceled && 'uri' in result) {
//         // Update the cover photo URI
//         console.log('New cover photo URI:', result.uri);

//         setCoverPhotoUri(result.uri as string);
//       }
//     } catch (error) {
//       console.error('Error selecting image from gallery:', error);
//     }
//     console.log('Cover photo URI:', coverPhotoUri);

//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Cover Photo */}
//       <TouchableOpacity onPress={handleEditCoverPhoto}>
//         <Image
//           style={styles.coverPhoto}
//           source={coverPhotoUri ? { uri: coverPhotoUri } : require('../../assets/user.png')}
//         />
//         <Text style={styles.editCoverText}>Edit Cover Photo</Text>
//       </TouchableOpacity>

//       {/* Profile Picture */}
//       <TouchableOpacity onPress={handleEditProfile} style={styles.profilePictureContainer}>
//         <Image
//           style={styles.profilePicture}
//           source={profilePictureUri ? { uri: profilePictureUri } : require('../../assets/user.png')}
//         />
//       </TouchableOpacity>

//       {/* User Information */}
//       <View style={styles.userInfoContainer}>
//         <Text style={styles.username}>John Doe</Text>
//         <Text style={styles.bio}>Description about the user goes here...</Text>
//       </View>

//       {/* Options */}
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Posts</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Photos</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option}>
//           <Text style={styles.optionText}>Friends</Text>
//         </TouchableOpacity>
//         {/* Add more options as needed */}
//       </View>

//       {/* Posts */}
//       <View style={styles.postsContainer}>
//         {/* Render posts here */}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   coverPhoto: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   editCoverText: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   profilePictureContainer: {
//     alignItems: 'center',
//     position: 'absolute',
//     top: 150,
//     left: 20,
//   },
//   profilePicture: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   userInfoContainer: {
//     alignItems: 'center',
//     marginTop: 100,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   bio: {
//     fontSize: 16,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//     marginTop: 10,
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 10,
//   },
//   option: {
//     paddingHorizontal: 20,
//   },
//   optionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   postsContainer: {
//     marginTop: 20,
//     paddingHorizontal: 20,
//   },
// });

// export default ProfileScreen;
import { Alert, ScrollView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker from expo-image-picker
import React, { useState } from 'react';
import ImagePickerExample from './uploadCoverPhoto';

const ProfileScreen = () => {
  const [profilePictureUri, setProfilePictureUri] = useState<string | null>(null); // Profile picture URI
  const [coverPhotoUri, setCoverPhotoUri] = useState<string | null>(null); // Cover photo URI

  // Function to handle editing profile picture
  const handleEditProfilePicture = async () => {
    // Your implementation
  };

  // Function to handle editing cover photo
  const handleEditCoverPhoto = async () => {
    // try {
    //   // Request permission to access the device's photo gallery
    //   const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //   if (!permissionResult.granted) {
    //     Alert.alert('Permission Denied', 'Permission to access the photo gallery was denied.');
    //     return;
    //   }

    //   // Launch the image picker and await the result
    //   const result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     aspect: [1, 1], // Aspect ratio (1:1 for profile picture)
    //     quality: 1, // Image quality
       
    //   }) as ImagePicker.ImagePickerResult;

    //   // Handle the selected image
    //   if (!result.canceled && result.uri) {
    //     // Update the cover photo URI
    //     setCoverPhotoUri(result.uri);
    //   }
    // } catch (error) {
    //   console.error('Error selecting image from gallery:', error);
    // }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cover Photo */}
      <ImagePickerExample handleImagePicked={handleEditCoverPhoto} />
      <ImagePickerExample handleImagePicked={handleEditProfilePicture} />

      {/* Profile Picture */}
      <TouchableOpacity onPress={handleEditProfilePicture} style={styles.profilePictureContainer}>
        {profilePictureUri ? (
          <Image
            style={styles.profilePicture}
            source={{ uri: profilePictureUri }}
          />
        ) : (
          <Image
            style={styles.profilePicture}
            source={require('../../assets/user.png')}
          />
        )}
      </TouchableOpacity>

      {/* User Information */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.bio}>Description about the user goes here...</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Friends</Text>
        </TouchableOpacity>
        {/* Add more options as needed */}
      </View>

      {/* Posts */}
      <View style={styles.postsContainer}>
        {/* Render posts here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  editCoverText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 16,
    color: 'black',
  },
  profilePictureContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    left: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  option: {
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
