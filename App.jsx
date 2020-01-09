import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TodoProvider from './contexts/TodoContext';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App() {
  return (
    <TodoProvider>
      <View style={styles.container}>
        <View style={styles.form}>
          <AddTodo></AddTodo>
        </View>
        <View style={styles.list}>
          <TodoList></TodoList>
        </View>
      </View >
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    flex: 1,
  },
  form: {
    height: 180,
    backgroundColor: '#999'
  }
});
