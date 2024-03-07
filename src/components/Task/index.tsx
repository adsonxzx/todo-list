import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon  from "react-native-vector-icons/EvilIcons";
import IconFeather from "react-native-vector-icons/Feather";
import styles from "./styles";

interface Task {
    id: string;
    title: string;
    done: boolean;
}

interface IProp {
    task: Task;
    handleTaskDone: (taskId: string) => void;
    handleDeleteTask: (taskId: string) => void;
}

export const Task = ({ task, handleTaskDone, handleDeleteTask }:IProp) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleTaskDone(task.id)}>
                <View style={[task.done ? styles.checkDone : styles.check]}>
                    {
                        task.done && (
                            <IconFeather name="check" size={12} color="#fff" />
                        )
                    }
                </View>
            </TouchableOpacity>


            <Text style={[styles.title, task.done ? styles.titleDone : null ]}>{task.title}</Text>

            <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                <Icon name="trash" size={22} color="#808080" />
            </TouchableOpacity>
        </View>
    )
} 
