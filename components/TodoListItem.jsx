import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TodoContext } from '../contexts/TodoContext';

const TodoListItem = ({ todo }) => {
    const { removeTodo } = useContext(TodoContext);

    return (
        <TouchableNativeFeedback onPress={() => removeTodo(todo)}>
            <View style={styles.item}>
                <EvilIcons style={styles.icon} name="check" size={32} />
                <Text>{todo.title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 38,
        borderColor: '#333',
        borderStyle: 'dashed',
        borderWidth: 1,
    },
    icon: {
        paddingRight: 10,
    }
});

export default TodoListItem;