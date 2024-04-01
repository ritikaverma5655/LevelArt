import { View } from 'react-native'
import Header from './Header'
import React from 'react'
import PostFeed from './Post'
const Home=()=>{
    return(
        <View>
            <Header title={"Level Art"}/>
             <PostFeed/>
        </View>
    )
}
export default Home