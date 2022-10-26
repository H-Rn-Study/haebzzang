import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'

import DateHead from './components/DateHead';
import AddTodo from "./components/AddTodo";
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id : 1, text : '작업환경 설정', done : true},
    {id : 2, text : '리액트 네이티브 기초 공부', done : false},
    {id : 3, text : '투두리스트 만들어보기', done : false},
  ]);

  // 불러오기
  useEffect(() => {
    async function load() {
      try {
        const rawTodos = await AsyncStorage.getItem('todos');
        const savedTodos = JSON.parse(rawTodos);
        setTodos(savedTodos);
      } catch (e) {
        console.log('Failed to save todos');
      }
    }
    load();
  }, []);

  const onInsert = text => {
    // 새로 등록할 항목의 id 구하기
    // 등록된 항목 중, 가장 큰 id를 구하고 그 값에 1 더함
    // 리스트가 비어있다면 1을 id로 사용
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done : !todo.done} : todo,
      );
      setTodos(nextTodos);
  }

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView edges = {['buttom']} style = {styles.block}>
        <KeyboardAvoidingView
          behavior = {Platform.select({ios: 'padding', android: undefined})}
          style = {styles.avoid}>
          <DateHead date = {today} />
          {todos.length === 0 ? (
          <Empty />
          ) : (
          <TodoList todos = {todos} onToggle = {onToggle} onRemove = {onRemove} />
        )}
          <AddTodo onInsert = {onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },

  avoid: {
    flex: 1,
  },
});

export default App;