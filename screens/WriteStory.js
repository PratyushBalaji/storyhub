import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class WriteStory extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      storyName:"",
      story:"",
      authorName:''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addStory =(storyName,story)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('saved_stories').add({
        "user_id": userId,
        "story_name":storyName,
        "story_content":story,
        "author_name":authorName,
        "request_id"  : randomRequestId,
    })

    this.setState({
        storyName :'',
        story : ''
    })

    return Alert.alert("Story Saved Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Write Story"/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter story name"}
                onChangeText={(text)=>{
                    this.setState({
                        storyName:text
                    })
                }}
                value={this.state.storyName}
              />
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter author name"}
                onChangeText={(text)=>{
                    this.setState({
                        authorName:text
                    })
                }}
                value={this.state.authorName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Write story here"}
                onChangeText ={(text)=>{
                    this.setState({
                        story:text
                    })
                }}
                value ={this.state.story}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addStory(this.state.storyName,this.state.authorName,this.state.story)}}
                >
                <Text>Add</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
