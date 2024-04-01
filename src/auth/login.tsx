import { useState } from 'react';
import React from 'react';
import {TextInput,StyleSheet, View,Button, ImageBackground} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const UserLoginScreen=()=>{
    const [email , setEmail]=useState('');
    const [password , setPassword]=useState('');
    const navigation : any=useNavigation()
    return (<ImageBackground  source={require('../../assets/signpimg.png')} style={styles.imgbackground} >     
    <View  style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder='EmailAddress'
            value={email}
            onChangeText={(val)=>setEmail(val)}></TextInput>

            <TextInput
            style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={(val)=>setPassword(val)}></TextInput>

            <View style={styles.button}>
                <Button onPress={()=>navigation.navigate('Home')} title="Log In" />
           </View>
    </View>
    </ImageBackground>)
}

const styles=StyleSheet.create({
     container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     },
     input:{
        width:'60%',
        height:'5%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        fontSize:17
      },
      button:{
        width:'30%',
        height:'10%',
        // backgroundColor:'black',
        color:'white',
        borderRadius:50,
        marginTop:5,
        fontSize:17
      },
      imgbackground:{
        height:'100%',
        width:'100%',
      },
})

export default UserLoginScreen