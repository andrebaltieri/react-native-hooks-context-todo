import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleInputChange = (value) => {
        setTitle(value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO LIST</Text>
            <TextInput
                style={styles.input}
                style={{ height: 40 }}
                placeholder="Nova tarefa..."
                onChangeText={handleInputChange}
            />
            <Button
                onPress={() => { addTodo(title); Keyboard.dismiss(); }}
                title="Adicionar"
                color="#841584"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
    }
});

export default AddTodo;