import {Button} from "../../../../components/Button.tsx";
import {useEffect, useState} from "react";
import {CursoInfo} from "./Interfaces.ts";
import cursoInfo from "../../../../api/curso.json"
import {Header} from "../Header.tsx";
import {EmptySection} from "../EmptySection.tsx";
import {numeroAordinal} from "./utils.ts";

export const Curso = () => {
  const [curso, setCurso] = useState<CursoInfo | null>(null)
  const anioActual: string = numeroAordinal(curso?.anio_actual)

   useEffect(() => {
     setCurso(cursoInfo)
   }, [] )


  return(
    <section className="p-5 flex flex-col flex-grow">
      <Header title="Mi curso" subtitle="Toda la información sobre tu curso aquí" />
      <div className="flex items-center flex-col flex-grow justify-center mt-4">
        { curso ? (
          <>
            <div className="flex gap-5">
              <div className="flex flex-col border-2 border-pale2 self-start p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
                <h2 className="font-bold text-lg pb-3 self-center text-dark">Información general</h2>
                <p><span className="font-semibold text-dark">Nombre del curso: </span> {curso.nombre}</p>
                <p><span className="font-semibold text-dark">Centro de Estudios: </span> {curso.centro_de_estudios}</p>
                <p><span className="font-semibold text-dark">Años de Duración: </span> {curso.anios_de_duracion}</p>
                <p><span className="font-semibold text-dark">Tipo de Evaluación: </span> {curso.tipo_de_evaluacion}</p>
                <p><span className="font-semibold text-dark">Primer Año Académico: </span> {curso.primer_anio_academico}</p>
                <p><span className="font-semibold text-dark">Último Año Académico: </span> {curso.ultimo_anio_academico}</p>
              </div>
              <div className="flex flex-col gap-5 justify-around">
                <div className="flex flex-col border-2 border-pale2 self-start p-5 rounded-2xl shadow-lg gap-2 text-gray-600">
                  <h2 className="font-bold text-lg pb-3 self-center text-dark">Actualmente</h2>
                  <p><span className="font-semibold text-dark">Año: </span>{anioActual}</p>
                  <p><span className="font-semibold text-dark">Semestre: </span> {curso.semestre_actual}</p>
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