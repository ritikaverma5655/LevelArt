// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text } from 'react-native';
// import axios from 'axios';

// // Define the type/interface for a post
// interface Post {
//   id: number;
//   user: string;
//   text: string;
//   // Add more properties as needed
// }

// // Post component to render individual post
// const PostScreen = ({ post }: { post: Post }) => {
//   return (
//     <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
//       <Text style={{ fontWeight: 'bold' }}>{post.user}</Text>
//       <Text>{post.text}</Text>
//       {/* Add more content like images, likes, comments, etc. */}
//     </View>
//   );
// };

// const PostFeed = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     // Fetch posts from an API or use dummy data
//     const fetchPosts = async () => {
//       try {
//         // Example: Fetching posts from an API
//         const response = await axios.get(`https://picsum.photos/id/237/200/300`);
//         console.log
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <FlatList
//       data={posts}
//       renderItem={({ item }) => <PostScreen post={item} />}
//       keyExtractor={(item ,index) => index.toString()}
//     />
//   );
// };

// export default PostFeed;


import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PostFeed = ({ post }: any) => {
    // Check if post is undefined or null
    if (!post) {
      return null; // Return null if post is undefined or null
    }
  
    // Render the post content
    return (
      <View style={styles.container}>
        {/* Post Header */}
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: post.user.avatar }}
          />
          <Text style={styles.username}>{post.user.username}</Text>
        </View>
  
        {/* Post Image */}
        <Image
          style={styles.postImage}
          source={{ uri: post.image }}
        />
  
        {/* Post Actions (like, comment, share) */}
        <View style={styles.actions}>
          {/* Action buttons */}
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostFeed;
