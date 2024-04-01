import { TextInput, Text ,View,StyleSheet, Button, ImageBackground, TouchableOpacity} from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native";
const UserRegisterScreen = () => {
    const[username ,setUserName]=useState('');
    const[email ,setEmail]=useState('');
    const[phonenumber ,setPhoneNumber]=useState('');
    const[password ,setPassword]=useState('');
    const[confirmpassword ,setConfirmPassword]=useState('');
    const[error ,setError]=useState('');
    const navigation:any = useNavigation()
    const validatePhoneNumber =(val:any) => {
      // Regular expression for a 10-digit phone number
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(val);
    };
    const validateEmail = (val:any) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    };
  
  
    const handleSignup=()=>{
      if (username.trim() === '' || email.trim() === '' || phonenumber.trim() === ''||password.trim() === '' || confirmpassword.trim() === '' ) {
        setError('Please fill out all fields');
      }
    else if(password !== confirmpassword){
        setError('Password does not match');
      }
      else if(!validatePhoneNumber(phonenumber)){
        setError('Phone Number is not valid');
      }
      else if(!validateEmail(email)){
        setError('Email is not valid')
      }
      else{
        setError('Signup Succes')
        navigation.navigate('Login')
      }
    }
  return( 
    
<ImageBackground  source={require('../assets/signpimg.png')} style={styles.imgbackground} >
      <View style={styles.container}>
        <Text style={styles.registertxt} >Register Here</Text> 

         <TextInput style={styles.input}
         placeholder="UserName"
         value={username}
         onChangeText={(text)=>setUserName(text)}></TextInput>

        <TextInput  style={styles.input}
         placeholder="EmailAddress"
         value={email}
         onChangeText={(text)=>setEmail(text)}></TextInput> 

         <TextInput style={styles.input}
         placeholder="PhoneNumber"
         value={phonenumber}
         onChangeText={(text)=>setPhoneNumber(text)}></TextInput> 

        <TextInput style={styles.input}
         placeholder="Password"
         value={password}
         onChangeText={(text)=>setPassword(text)}></TextInput> 

        <TextInput style={styles.input}
         placeholder="ConfirmPassword"
         value={confirmpassword}
         onChangeText={(text)=>setConfirmPassword(text)}></TextInput> 

        <Text style={styles.error} >{error}</Text> 
        <View style={styles.button} >
          <Button onPress={handleSignup} title="Submit" />
        </View>
        <View style={styles.alreadyacc} >
            <Text style={styles.inlineItem}>Already Have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.inlineItem}>
               <Text>Log In</Text>
            </TouchableOpacity>
       </View>

    </View> 
</ImageBackground>
    
     )

}
const styles = StyleSheet.create({
      container: {
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
      error:{
        color: 'red',
        marginBottom: 5,
        fontSize:15
      },
      registertxt:{
        color:'black',
        fontSize:20,
        marginBottom:25,
        fontWeight:'bold'
      },
      alreadyacc: {
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Distribute items along the main axis
        marginTop:-50,
      },
      inlineItem: {
        textAlign: 'center', // Center text horizontally
        padding: 10,
        flexDirection: 'row', // Arrange children horizontally
        marginLeft:0

    },
  });

export default UserRegisterScreen