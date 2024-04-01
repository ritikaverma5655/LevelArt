import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal:20,
      paddingVertical:30,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop:15
    },
    title: {
      fontSize:20,
      fontWeight: 'bold'
    },
    iconContainer: {
      padding: 8
    }
  });
  
  export default Header;