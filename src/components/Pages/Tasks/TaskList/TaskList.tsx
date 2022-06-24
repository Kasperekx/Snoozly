import { Box, Button, Heading, Input, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { db } from "services/auth/config";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { DeleteIcon } from "@chakra-ui/icons";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<any>([]);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task !== "") {
      await addDoc(collection(db, "tasks"), {
        task,
        completed: false,
      });
      setTask("");
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  useEffect(() => {
    const q = query(collection(db, "tasks"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let tasksArray: any = [];
      querySnapshot.forEach((doc) => {
        tasksArray.push({ ...doc.data(), id: doc.id });
      });
      setTasks(tasksArray);
    });

    return () => unsub();
  }, []);

  return (
    <Box>
      <Heading mb="30px">Aktywności</Heading>
      <form onSubmit={handleSubmit}>
        <Box display="flex">
          <Input
            type="text"
            placeholder="Twoja aktywność..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button ml="30px" type="submit">
            Dodaj
          </Button>
        </Box>
      </form>
      <Box mt="30px">
        <List>
          {tasks.map((item: any) => (
            <ListItem fontWeight="bold" mb="15px" key={item.id}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="10px 15px"
              >
                {item.task}
                <Button onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default TaskList;
