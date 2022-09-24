import React, {useState} from 'react';
import {Alert, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

const TodoInputBox = () => {
  interface task {
    idx: number;
    text: string;
    isCompleted: boolean;
  }

  const [taskText, setTaskText] = useState<string>('');
  const [taskIdx, setTaskIdx] = useState(0);
  const [taskList, setTaskList] = useState<task[]>([]);

  const addTaskButton = () => {
    if (!taskText) {
      Alert.alert('내용을 입력해주세요');
      return;
    }

    setTaskIdx(taskIdx + 1);
    const newTask = {
      idx: taskIdx,
      text: taskText,
      isCompleted: false,
    };
    setTaskList(data => [newTask, ...data]);
    setTaskText('');
  };

  return (
    <View style={Styles.addTaskContainer}>
      <TextInput
        onSubmitEditing={addTaskButton}
        returnKeyType="done"
        style={Styles.input}
        placeholder="todo"
        placeholderTextColor="#555"
        onChangeText={setTaskText}
        value={taskText}
      />
      <TouchableOpacity
        style={Styles.button}
        activeOpacity={0.8}
        onPress={addTaskButton}>
        <View style={Styles.addTaskButtonContainerIcon}>
          <Icon name="circle-thin" size={16} color="#F2F2F2" />
          <Icon
            name="plus"
            size={12}
            color="#F2F2F2"
            style={Styles.addTaskButtonIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInputBox;
