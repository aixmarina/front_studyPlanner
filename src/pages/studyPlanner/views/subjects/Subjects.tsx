import {Header} from "../components/Header.tsx";
import {EmptySection} from "../components/EmptySection.tsx";
import {useEffect, useState} from "react";
import { SubjectCard } from "./components/subjectCard/SubjectCard.tsx";
import {PlusIcon} from "../../../../components/icons/PlusIcon.tsx";
import {Link} from "react-router-dom";
import {numberToOrdinal} from "../utils.ts";
import {SubjectInterface} from "../types/Interfaces.ts";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import axios from "../../../../api/axios.ts";

export const Subjects = () => {
  const { course } = useCurrentUser()

  const [subjects, setSubjects] = useState<SubjectInterface[] | null>(null)

  useEffect( () => {
    const handleSubjectsData = async () => {
      if(course)  {
        const response = await axios.get(`/v1/courses/${course.id}/subjects`)
        console.log(response.data.data, "asignaturas")
        setSubjects(response.data.data)
      }
    }
    handleSubjectsData()
  }, [course])

  const actualSubjects:SubjectInterface[] | undefined = subjects?.filter(subject => {
    return subject.year === course?.actual_year && subject.semester === course?.actual_semester
  })

  const subjectsPerYear: Record<string, SubjectInterface[]> = {}

  subjects?.forEach(subject => {
    const year: string = subject.year.toString()
    if (!subjectsPerYear[year]) {
      subjectsPerYear[year] = []
    }
    subjectsPerYear[year].push(subject)
  })

  const years: string[] = Object.keys(subjectsPerYear).sort((a: string, b: string) => parseInt(b) - parseInt(a))

  return(
    <section className="p-5 flex flex-col flex-grow">
      <Header title="Mis Asignaturas" subtitle="Todas tus asignaturas a simple vista"/>
      {/* if there is no subject*/}
      {subjects && subjects?.length > 0 ? (
        <>
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-xl mb-4">Cursando actualmente</h2>
              <Link to="/dashboard/subjects/createSubject" className="hover:scale-125 transition ease-in-out">
                <PlusIcon />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {actualSubjects?.map((subject: SubjectInterface, index: number) => (
                <SubjectCard key={index} subject={subject} />
              ))}
            </div>
            <h2 className="font-semibold text-xl my-5">Cursos anteriores</h2>
            {years.map(year => (
              <div key={year} className="">
                <h2 className="mb-3 text-xl">{numberToOrdinal(parseInt(year))}</h2>
                <div className="grid grid-cols-5 gap-3 mb-4">
                  {subjectsPerYear[year].map((subject, index) => (
                    <SubjectCard subject={subject} key={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center flex-col flex-grow justify-center mt-4">
            <EmptySection titleButton="Añadir tu primera asignatura" title="No has creado ninguna asignatura aún."
                          subtitle="La información sobre todas tus asignaturas aparecerá aquí." url="subjects/createSubject"/>
          </div>
        </>
      )}
    </section>
  )
}