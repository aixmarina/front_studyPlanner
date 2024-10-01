import { useEffect, useState } from 'react';
import axios from "../../../../../api/axios.ts";
import {State} from "../../types/Interfaces.ts";


interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
  state: string;
  subject: {
    id: number;
    name: string;
  };
}

const UpcomingTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('v1/tasks/upcoming');
        setTasks(response.data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
        <tr>
          <th className="py-2 px-4 border-b">Nombre</th>
          <th className="py-2 px-4 border-b">Descripción</th>
          <th className="py-2 px-4 border-b">Deadline</th>
          <th className="py-2 px-4 border-b">Asignatura</th>
          <th className="py-2 px-4 border-b">Estado</th>
        </tr>
        </thead>
        <tbody>
        {tasks?.map(task => (
          <tr key={task.id}>
            <td className="py-2 px-4 border-b">{task.name}</td>
            <td className="py-2 px-4 border-b">{task.description}</td>
            <td className="py-2 px-4 border-b">{new Date(task.deadline).toLocaleDateString()}</td>
            <td className="py-2 px-4 border-b">{task.subject?.name ?? 'No Subject'}</td>
            <td className="py-2 px-4 border-b">{task.state === State.pending ? 'Por hacer' : task.state === State.inProgress ? 'En progreso' : 'Completada'}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingTasks;
