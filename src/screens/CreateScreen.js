import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)
  return (
    <BlogPostForm formTitle="Add Post" onSubmit={(title, content) => { addBlogPost(title, content, () => { navigation.navigate('Index') }) }} />
  )
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
    marginLeft: 5
  }
})
export default CreateScreen