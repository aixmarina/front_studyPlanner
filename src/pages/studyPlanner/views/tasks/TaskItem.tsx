import {Button} from "../../../../components/button/Button.tsx";
import {EditIcon} from "../../../../components/icons/EditIcon.tsx";
import {TrashIcon} from "../../../../components/icons/TrashIcon.tsx";
import axios from "../../../../api/axios.ts";
import {Task} from "../types/Interfaces.ts";
import React from "react";
import {Link} from "react-router-dom";

interface TaskItemProps {
  task: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskItem = ({task, setTasks}: TaskItemProps) => {
  const onClickDelete = async () => {
    const taskId = task.id
    try {
      await axios.delete(`v1/tasks/${taskId}`)
      setTasks((prevTasks: Task[]) => prevTasks.filter((task: Task) => task.id !== taskId))
    } catch (error) {
      console.error(error)
    }
  }



  return(
    <>
      <h3 className="font-semibold">{task.name}</h3>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <div className="flex gap-2 mt-2">
        <Link to={`/dashboard/tasks/editTask/${task.id}`}>
          <Button type="secondary" className='px-2'><EditIcon/></Button>
        </Link>
        <Button type="danger" className='px-2' onClickHandler={onClickDelete}><TrashIcon/></Button>
      </div>
    </>
  )
}
export default TaskItem