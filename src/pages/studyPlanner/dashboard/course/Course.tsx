import {Button} from "../../../../components/Button.tsx";
import {useEffect, useState} from "react";
import {CourseInterface} from "./Interfaces.ts";
import courseData from "../../../../api/mocks/course.json"
import {Header} from "../components/Header.tsx";
import {EmptySection} from "../components/EmptySection.tsx";
import {numberToOrdinal} from "../utils.ts";

export const Course = () => {
  const [course, setCourse] = useState<CourseInterface | null>(null)

   useEffect(() => {
     setCourse(courseData) //TODO: replace with a fetch call when the backend is ready
   }, [] )

  return(
    <section className="p-5 flex flex-col flex-grow">
      <Header title="Mi curso" subtitle="Toda la información sobre tu curso aquí" />
      <div className="flex items-center flex-col flex-grow justify-center mt-4">
        { course ? (
          <>
            <div className="flex gap-5">
              <div className="flex flex-col border-2 border-pale2 self-start p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
                <h2 className="font-bold text-lg pb-3 self-center text-dark">Información general</h2>
                <p><span className="font-semibold text-dark">Nombre del curso: </span> {course.name}</p>
                <p><span className="font-semibold text-dark">Centro de Estudios: </span> {course.study_center}</p>
                <p><span className="font-semibold text-dark">Años de Duración: </span> {course.duration_years}</p>
                <p><span className="font-semibold text-dark">Tipo de Evaluación: </span> {course.evaluation_type}</p>
                <p><span className="font-semibold text-dark">Primer Año Académico: </span> {course.first_year}</p>
                <p><span className="font-semibold text-dark">Último Año Académico: </span> {course.last_year}</p>
              </div>
              <div className="flex flex-col gap-5 justify-around">
                <div className="flex flex-col border-2 border-pale2 self-start p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
                  <h2 className="font-bold text-lg pb-3 self-center text-dark">Actualmente</h2>
                  <p><span className="font-semibold text-dark">Año: </span>{numberToOrdinal(course?.actual_year)}</p>
                  <p><span className="font-semibold text-dark">Semestre: </span> {course.actual_semester}</p>
                </div>
                <Button type="secondary">Editar</Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <EmptySection titleButton="Añadir curso" title="No estás matriculado en ningún curso."
                          subtitle="La información sobre tu curso aparecerá aquí." url="crear_curso"/>
          </>
        )}
      </div>
    </section>
  )
}