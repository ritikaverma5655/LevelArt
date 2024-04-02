import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const ProfileComponent: React.FC = () => {
  const [selectedProfileImage, setSelectedProfileImage] = useState<string | null>(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState<string | null>(null);
  const [name, setName] = useState<string>('Name');
  const [bio, setBio] = useState<string>('Bio');
  const [isNameEditable, setIsNameEditable] = useState<boolean>(false);
  const [isBioEditable, setIsBioEditable] = useState<boolean>(false);
  const [posts, setPosts] = useState<string[]>([]);

  const handleProfileImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!pickerResult.canceled) {
      setSelectedProfileImage(pickerResult.assets[0].uri);
    }
  };

  const handleCoverImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!pickerResult.canceled) {
      setSelectedCoverImage(pickerResult.assets[0].uri);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleBioChange = (text: string) => {
    setBio(text);
  };

  const handleEditName = () => {
    setIsNameEditable(true);
  };

  const handleSaveName = () => {
    setIsNameEditable(false);
  };

  const handleEditBio = () => {
    setIsBioEditable(true);
  };

  const handleSaveBio = () => {
    setIsBioEditable(false);
  };

  const handleAddPost = () => {
    // Add code to handle adding a new post
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cover Photo */}
      <TouchableOpacity onPress={handleCoverImageUpload}>
        <ImageBackground
          source={selectedCoverImage ? { uri: selectedCoverImage } : require('../../assets/user.png')}
          style={styles.coverPic}
        >
          <View style={styles.cameraIconContainer}>
            <Ionicons name="camera" size={24} color="white" />
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* Profile Photo */}
      <TouchableOpacity onPress={handleProfileImageUpload} style={styles.profilePicContainer}>
        <Image
          source={selectedProfileImage ? { uri: selectedProfileImage } : require('../../assets/user.png')}
          style={styles.profilePic}
        />
        <View style={styles.cameraIconContainer}>
          <Ionicons name="camera" size={24} color="white" />
        </View>
      </TouchableOpacity>

      <View style={styles.userInfoContainer}>
        {isNameEditable ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={handleNameChange}
            placeholder="Name"
            placeholderTextColor="#666"
            autoFocus
          />
        ) : (
          <Text style={styles.nameText}>{name}</Text>
        )}
        {isNameEditable ? (
          <TouchableOpacity onPress={handleSaveName}>
            <Text style={styles.saveButtonText}>Save Name</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEditName}>
            <Text style={styles.editButtonText}>Edit Name</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.userInfoContainer}>
        {isBioEditable ? (
          <TextInput
            style={styles.bioInput}
            value={bio}
            onChangeText={handleBioChange}
            placeholder="Bio"
            placeholderTextColor="#666"
          />
        ) : (
          <Text style={styles.bioText}>{bio}</Text>
        )}
        {isBioEditable ? (
          <TouchableOpacity onPress={handleSaveBio}>
            <Text style={styles.saveButtonText}>Save Bio</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleEditBio}>
            <Text style={styles.editButtonText}>Edit Bio</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Tags</Text>
        </TouchableOpacity>
        {/* Add more options as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  coverPic: {
    width: '100%',
    aspectRatio: 16 / 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    position: 'relative',
    marginTop: -60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    padding: 2,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  option: {
    paddingHorizontal: 55,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfoContainer: {
    marginTop:10,
    alignItems: 'center',
  },
  nameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom:10,
    paddingHorizontal: 20,
    width: '80%',
  },
  bioInput: {
    fontSize: 18,
    color: '#666',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '80%',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#4267B2',
    marginTop: 5,
    marginLeft:320
  },
  editButtonText: {
    fontSize: 18,
    color: '#4267B2',
    marginLeft:330
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bioText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '80%',
  },
});

export default ProfileComponent;
