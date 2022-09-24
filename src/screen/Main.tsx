import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Styles} from './Styles';
import Tts from 'react-native-tts';
import Header from '../components/header';

interface task {
  idx: number;
  text: string;
  isCompleted: boolean;
}

export const Main = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [taskIdx, setTaskIdx] = useState(0);
  const [taskList, setTaskList] = useState<task[]>([]);
  const [visible, setVisible] = useState(false);

  Tts.setDefaultLanguage('ko-KR');
  Tts.setDefaultVoice('ko-kr-x-ism-local');

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

  const removeTaskButton = (idx: number) => {
    setTaskList(taskList.filter(task => task.idx !== idx));
  };

  const removeAllTaskButton = () => {
    setTaskList(taskList.filter(task => task.isCompleted === false));
  };

  const completedCheck = (idx: number) => {
    let data: task[] = [];

    setVisible(false);
    taskList.map(task => {
      if (task.idx === idx) {
        task.isCompleted = !task.isCompleted;
      }
      if (task.isCompleted === true) {
        setVisible(true);
      }
      data.push(task);
    });

    setTaskList(data);
  };

  const completedCnt: number = taskList.filter(
    task => task.isCompleted === true,
  ).length;

  const listCnt = taskList.length - completedCnt;

  return (
    <SafeAreaView style={Styles.main}>
      <Header />
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

      <View style={Styles.containerInfo}>
        <View style={Styles.wrapperInfo}>
          <View style={Styles.wrapperStatus}>
            <Text style={[Styles.info, Styles.created]}>남음</Text>
            <Text style={Styles.counter}>{listCnt}</Text>
          </View>

          <View style={Styles.wrapperStatus}>
            <Text style={[Styles.info, Styles.completed]}>완료</Text>
            <Text style={Styles.counter}>{completedCnt}</Text>
          </View>
        </View>
      </View>

      <View style={Styles.listTask}>
        <FlatList
          data={taskList}
          ListEmptyComponent={() => (
            <View style={Styles.containerEmpty}>
              <View style={Styles.empty}>
                <Image
                  style={Styles.clipboard}
                  source={require('../assets/clipboard.png')}
                />
                <Text style={[Styles.emptyText, Styles.emptyTitle]}>
                  리스트
                </Text>
              </View>
            </View>
          )}
          renderItem={({item}) => (
            <View style={Styles.containerTask}>
              <View style={Styles.taskWrapper}>
                <BouncyCheckbox
                  hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
                  fillColor="#5E60CE"
                  style={Styles.taskCheckBox}
                  isChecked={item.isCompleted}
                  disableBuiltInState
                  onPress={() => {
                    completedCheck(item.idx);
                  }}
                />
                <View style={Styles.textbox}>
                  <Text
                    style={[
                      Styles.taskText,
                      item.isCompleted && Styles.taskCompletedText,
                    ]}>
                    {item.text}
                  </Text>
                  <TouchableOpacity
                    hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
                    style={Styles.taskSound}
                    onPress={() => {
                      Tts.stop();
                      Tts.speak(item.text);
                    }}>
                    <Icon name="headphones" size={20} color="#808080" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
                  style={Styles.taskButton}
                  onPress={() => {
                    removeTaskButton(item.idx);
                  }}>
                  <Icon
                    name="trash"
                    size={20}
                    color="#808080"
                    style={Styles.taskIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      {visible && (
        <TouchableOpacity
          onPress={() => {
            removeAllTaskButton();
          }}>
          <View style={Styles.removeButton}>
            <Text style={[Styles.info, Styles.removeButtonText]}>
              선택 삭제
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
