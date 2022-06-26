import React, { useState } from "react";
import { db } from "services/auth/config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Box, Text, IconButton } from "@chakra-ui/react";
import {
  CheckCircleIcon,
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

//@ts-ignore
export default function Todo({ task }) {
  const [newTitle, setNewTitle] = useState("");
  const [isEdited, setIsEdited] = useState(true);

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const completeTodo = async () => {
    const docRef = doc(db, "tasks", task.id);
    await updateDoc(docRef, {
      completed: !task.completed,
    });
    console.log(task.completed);
  };

  const editTodo = async () => {
    const docRef = doc(db, "tasks", task.id);
    await updateDoc(docRef, {
      task: newTitle,
    });
    setIsEdited(!isEdited);
  };
  const handleChange = (e: any) => {
    //e.preventDefault();
    if (task.completed === true) {
      setNewTitle(task.task);
    } else {
      task.task = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      justifyContent="space-between"
    >
      {isEdited ? (
        <Text
          color={task.completed ? "green" : ""}
          textDecoration={task.completed ? "line-through" : ""}
        >
          {task.task}
        </Text>
      ) : (
        <input
          type="text"
          value={task.task === "" ? newTitle : task.task}
          className="list"
          onChange={handleChange}
        />
      )}
      <Box>
        <IconButton
          aria-label="Ukończone"
          icon={!task.completed ? <CheckCircleIcon /> : <CloseIcon />}
          onClick={completeTodo}
          disabled={task.task == ""}
        />
        <IconButton
          aria-label="Edytuj"
          ml="15px"
          mr="15px"
          icon={isEdited ? <EditIcon /> : <CheckIcon />}
          onClick={isEdited ? () => setIsEdited(!isEdited) : editTodo}
        />
        <IconButton
          aria-label="Edytuj zadanie"
          icon={<DeleteIcon />}
          onClick={() => deleteTask(task.id)}
        />
      </Box>
    </Box>
  );
}
