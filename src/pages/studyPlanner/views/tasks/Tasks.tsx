import { Button } from "../../../../components/button/Button.tsx";
import {Header} from "../components/Header.tsx";
import TaskBoard from "./TaskBoard.tsx";
import {useEffect, useState} from "react";
import {Task} from "../types/Interfaces.ts";
import axios from "../../../../api/axios.ts";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import {Link} from "react-router-dom";

export const Tasks = () => {
  const { course } = useCurrentUser()
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect( () => {
    const handleTasksData = async () => {
      if(course)  {
        const response = await axios.get(`/v1/courses/${course.id}/tasks`)
        console.log(response)
        console.log(response.data.tasks, "tasks")
        setTasks(response.data.tasks)
      }
    }
    handleTasksData()
  }, [course])

  return(
    <>
      <section className="p-5 flex flex-col flex-grow">
      <Header title="Mis Tareas" subtitle="Todas tus tareas a simple vista">
        <div className="flex gap-5">
          <Link to="/dashboard/tasks/createTask">
            <Button type="secondary">Añadir tarea</Button>
          </Link>
        </div>
      </Header>
        <div className="flex">
          <TaskBoard tasks={tasks} setTasks={setTasks}/>
        </div>
      </section>
    </>
  )
}