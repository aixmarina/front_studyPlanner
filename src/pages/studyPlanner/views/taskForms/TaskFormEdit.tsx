import { Form } from "../../../../components/Form.tsx";
import { Button } from "../../../../components/button/Button.tsx";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useCurrentUser } from "../../../../contexts/CurrentUserContext.tsx";
import axios from "../../../../api/axios.ts";
import { useNavigate, useParams } from "react-router-dom";
import { SubjectInterface } from "../types/Interfaces.ts";

export const TaskFormEdit = () => {
  const { course } = useCurrentUser();
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    deadline: '',
    state: 'pending',
    subject_id: ''
  });

  const [subjects, setSubjects] = useState<SubjectInterface[] | null>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(`/v1/courses/${course?.id}/subjects`);
        setSubjects(response.data.data);
      } catch (error) {
        console.error("Error fetching subjects: ", error);
      }
    };

    const fetchTask = async () => {
      try {
        const response = await axios.get(`/v1/tasks/${taskId}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching task: ", error);
      }
    };

    fetchSubjects();
    fetchTask();
  }, [course?.id, taskId]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.put(`/v1/tasks/${taskId}`, formData);
      navigate('/dashboard/tasks');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form title="Edita la información de tu tarea" onSubmit={handleSubmit}>
      <div className="mb-4 md:flex md:justify-between gap-3">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre de la tarea"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="desc">
            Descripción
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="desc"
            type="text"
            placeholder="Descripción de la tarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="deadline">
            Fecha límite
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
            id="deadline"
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="subject_id">
            Asignatura
          </label>
          <select
            id="subject_id"
            name="subject_id"
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
            value={formData.subject_id}
            onChange={handleChange}
          >
            <option value="">Escoge una asignatura</option>
            {subjects?.map((subject: SubjectInterface) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6 text-center">
        <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">
          Guardar tarea
        </Button>
      </div>
    </Form>
  );
};
