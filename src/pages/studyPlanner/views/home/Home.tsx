import TaskProgressChart from "./charts/TaskProgressChart.tsx";
import {useEffect, useState} from "react";
import axios from "../../../../api/axios.ts";
import {SubjectInterface} from "../types/Interfaces.ts";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import {EmptySection} from "../components/EmptySection.tsx";
import UpcomingTasks from "./charts/UpcomingTasks.tsx";

export const Home = () => {
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);

  const { user, course, fetchCourseData } = useCurrentUser();

  useEffect(() => {
    const handleSubjectsData = async () => {
      if (user) await fetchCourseData(user.id);
      if (course) {
        const response = await axios.get(`/v1/courses/${course.id}/subjects`);
        const allSubjects: SubjectInterface[] = response.data.data;
        console.log(allSubjects, "asignaturas");

        const actualSubjects = allSubjects.filter(subject => {
          console.log(subject.year, "año de la asignatura", course.actual_year, "año actual");
          return subject.year === course.actual_year && subject.semester === course.actual_semester;
        });
        console.log(actualSubjects, "asignaturas actuales");
        setSubjects(actualSubjects);
      }
    };
    handleSubjectsData();
  }, [user]);

  if (!course) {
    return (
      <div className="flex items-center flex-col flex-grow justify-center mt-4">
        <EmptySection
          titleButton="Añadir curso"
          title="No has asignado aún tu curso."
          subtitle="Para poder obtener un resumen de las tareas, añade primero la información de tu curso."
          url="course/createCourse"
        />
      </div>
    );
  }

  if (subjects.length === 0) {
    return (
      <div className="flex items-center flex-col flex-grow justify-center mt-4">
        <EmptySection
          titleButton="Añadir asignaturas"
          title="No tienes asignaturas asignadas."
          subtitle="Para obtener un resumen de las tareas, añade asignaturas a tu curso."
          url="subjects/createSubject"
        />
      </div>
    );
  }

  return (
    <section className="m-4">
      <div className="flex mb-4 flex-col border-2 border-pale2 self-start p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
        <h2 className="font-bold text-lg pb-2 text-dark">Próximas tareas que entregar</h2>
        <UpcomingTasks/>
      </div>
      <div className="flex items-center mb-8 pb-12 flex-col h-[350px] border-2 border-pale2 p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
        <h2 className="font-bold text-lg pb-2 text-dark">Progreso del estado de tareas por asignatura</h2>
        <TaskProgressChart subjects={subjects}/>
      </div>
    </section>
  )
}