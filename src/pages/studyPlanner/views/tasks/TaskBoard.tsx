import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable, DropResult
} from 'react-beautiful-dnd';
import {State, Task} from '../types/Interfaces.ts';
import axios from "../../../../api/axios.ts";
import TaskItem from "./TaskItem.tsx";
import {EmptySection} from "../components/EmptySection.tsx";

interface TaskBoardProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskBoard = ({ tasks, setTasks }: TaskBoardProps) => {

  const updateTaskState = async (taskId:number, newState: State) => {
    try {
      await axios.put(`/v1/tasks/${taskId}`, { state: newState })

    } catch (error) {
      console.error(error)
      alert('Error actualizando el estado de la tarea')
    }
  }

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return

    const updatedTasks = [...tasks]
    const [reorderedTask] = updatedTasks.splice(result.source.index, 1)
    const newState: State = result.destination.droppableId as State
    reorderedTask.state = newState
    updatedTasks.splice(result.destination.index, 0, reorderedTask)

    await updateTaskState(reorderedTask.id, newState)
    setTasks(updatedTasks)
  }

  const getTasksByState = (state: string) => tasks.filter((task) => task.state === state);

  return tasks.length > 0 ? (
    <DragDropContext onDragEnd={onDragEnd}>
      {[State.pending, State.inProgress, State.complete].map((state: State) => (
        <Droppable key={state} droppableId={state}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="p-4 w-1/3 bg-pale2 m-2 rounded-lg">
              <h2 className="font-bold text-lg">{
                state === State.pending ? 'Por hacer' : state === State.inProgress ? 'En progreso' : 'Completadas'
              }</h2>
              {getTasksByState(state)?.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-white shadow-md rounded-lg mt-2"
                    >
                      <TaskItem task={task} setTasks={setTasks}/>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  ) : (
    <div className="flex items-center flex-col flex-grow justify-center mt-4">
      <EmptySection titleButton="Añadir tu primera tarea" title="No has creado ninguna tarea aún."
                    subtitle="El estado de todas tus tareas aparecerá aquí." url="tasks/createTask"/>
    </div>
  )
}

export default TaskBoard;
