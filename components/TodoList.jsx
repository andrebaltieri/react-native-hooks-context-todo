import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { todos } = useContext(TodoContext);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (<TodoListItem todo={item}></TodoListItem>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        margin: 30,
    }
});

export default TodoList;