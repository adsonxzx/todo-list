import React, { useMemo, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import { Task } from "../../components/Task";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface TypeTask {
    id: string;
    title: string;
    done: boolean;
}

export const Home = () => {
    const [tasks, setTasks] = useState<TypeTask[]>([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        setTasks((prevState) => [{id: uuidv4(), title: task, done: false},...prevState])
        setTask('')
    }

    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter((taskItem) => taskItem.id  !== taskId))
        setTask('')
    }

    const handleTaskDone = (taskId: string) => {
        const findTask = tasks.findIndex(taskItem => taskItem.id === taskId);
        const taskUpdated = [...tasks];

        taskUpdated[findTask].done = !taskUpdated[findTask].done;

        setTasks(taskUpdated)
    }

    const tasksDoneNumber = useMemo(() => {
        const findTaskDone =  tasks.filter(taskItem => taskItem.done);
        return findTaskDone.length
    },[tasks])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image  source={require('../../../assets/logo.png')}/>
            </View>

            <View style={styles.input}>
                <TextInput 
                    value={task}
                    onChangeText={setTask}
                    style={styles.inputText}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.inputButton} onPress={handleAddTask}>
                    <Text><Icon name="plus-circle" size={16} color="#fff" /></Text>
                </TouchableOpacity >
            </View>

            <View style={styles.taskInfo}>
                <View style={styles.taskInfoCreated}>
                    <Text style={styles.taskInfoCreatedText}>Criadas</Text>
                    <View style={styles.taskInfoNumber}>
                        <Text style={styles.taskInfoNumberText}>{tasks.length}</Text>
                    </View>
                </View>

                <View style={styles.taskInfoConcluded}>
                    <Text style={styles.taskInfoConcludedText}>Concluídas</Text>
                    <View style={styles.taskInfoNumber}>
                        <Text style={styles.taskInfoNumberText}>{tasksDoneNumber}</Text>
                    </View>
                </View>
            </View>

            <FlatList 
                data={tasks}
                renderItem={({item}) => <Task task={item} handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask} />}
                keyExtractor={(item) => item.title}
                ListEmptyComponent={<View style={styles.tasksEmpty}> 
                    <Icon name="bookmark" size={56} color="#808080" />
                    <Text style={styles.tasksEmptyText}>Você ainda não tem tarefas cadastradas
Crie tarefas e organize seus itens a fazer</Text>
                </View>}
            />
        </View>
    )
}