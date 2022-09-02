import React, {useState} from 'react';
import {
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
import produce from 'immer';

export const Main = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [task, setTask] = useState<any>([]);

  const addTaskButton = () => {
    setTask(task.concat(taskText));
  };

  const removeTaskButton = (index: number) => {
    const data = [...task];
    data.splice(index, 1);
    setTask(data);
  };

  return (
    <SafeAreaView style={Styles.main}>
      <View style={Styles.header}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <View style={Styles.addTaskContainer}>
        <TextInput
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
            <Text style={Styles.counter}>1</Text>
          </View>

          <View style={Styles.wrapperStatus}>
            <Text style={[Styles.info, Styles.completed]}>완료</Text>
            <Text style={Styles.counter}>2</Text>
          </View>
        </View>
      </View>

      <View style={Styles.containerTask}>
        <FlatList
          data={task}
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
                {/* <Text style={[Styles.emptyText, Styles.emptySubTitle]}>
                  Crie tarefas e organize seus itens a fazer
                </Text> */}
              </View>
            </View>
          )}
          renderItem={({item, index}) => (
            <View style={Styles.containerTask}>
              <View style={Styles.taskWrapper}>
                <BouncyCheckbox
                  fillColor="#5E60CE"
                  style={Styles.taskCheckBox}
                />
                <Text
                  style={[
                    Styles.taskText,
                    item.isCompleted && Styles.taskCompletedText,
                  ]}>
                  {index} {item}
                </Text>
                <TouchableOpacity
                  style={Styles.taskButton}
                  onPress={() => {
                    removeTaskButton(index);
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
    </SafeAreaView>
  );
};
