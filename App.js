import { platform } from 'os';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, Touchable, TouchableOpacity } from 'react-native-web';
import Taskcomponent from './components/Taskcomponent';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setItems([...taskItems, task])
    setTask(null);
  }
  const completetask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }
  return (
    <View style = {styles.container}>
      {/* Today's task*/}
      <View style={styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Today's Tasks</Text>
        <View style = {styles.items}>
        {/* This is where the tasks will go!*/}
        {
          taskItems.map((item, index)=> {
            return (
              <TouchableOpacity key = {index} onPress = {()=> completetask()}>
                <Task key = {index} text = {item}  />
              </TouchableOpacity>
            )
          })
        }
       {/* <Taskcomponent text={'Text 1'} />
        <Taskcomponent text={'Task 2'} /> */}
        </View>
      </View>

      {/* Write a task*/}
      <KeyboardAvoidingView
      behaviour = {Platform.OS === "ios"? "padding" : "height"}
      style = {styles.writeTaskWrapper}
      >
        <TextInput style = {styles.input} placeholder = {'Write a task'} value = {task} onChangeText ={text => setTask(Text)} />
        <TouchableOpacity onPress = {() => handleTask}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
  </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  writeTaskWrapper: {
    position: 'absolute', /* so that we can place it anywhere */
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around', /* So that input tab pushes the plus option to the right */

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderwidth: 1,
    width: 250,
  },
  addText: {

  },

});
