import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {useSelector} from "react-redux";
import {RootState} from "../../types/types.ts";
import {Home} from "./dashboard/Home.tsx";
import {Asignaturas} from "./dashboard/Asignaturas.tsx";
import React from "react";
import {Calendario} from "./dashboard/Calendario.tsx";
import {Curso} from "./dashboard/Curso.tsx";
import {Examenes} from "./dashboard/Examenes.tsx";
import {Notas} from "./dashboard/Notas.tsx";
import {Tareas} from "./dashboard/Tareas.tsx";


export const Container = () => {
  const currentDate: Date = new Date();
  const formattedDate:string = format(currentDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }).replace(/^\w/, c => c.toUpperCase());
  const selectedComponent: string = useSelector((state: RootState) => state.componentSlice.selectedComponent)

  const componentMap: { [key: string]: React.ReactNode } = {
    Home: <Home />,
    Asignaturas: <Asignaturas />,
    Calendario: <Calendario />,
    Curso: <Curso />,
    Examenes: <Examenes />,
    Notas: <Notas />,
    Tareas: <Tareas />,

  }

  const CurrentComponent: React.ReactNode = componentMap[selectedComponent]

  return (
    <>
      <section className="flex-grow flex flex-col">
        <div className="bg-pale2 pt-3">
          <p className="font-bold">Hola, Marina</p> {/* this should be dynamic */}
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
        <div className="bg-white my-3 mr-4 rounded-xl flex-grow">
        {CurrentComponent}
        </div>
      </section>
    </>
  )
}