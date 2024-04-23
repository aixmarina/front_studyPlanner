import {Header} from "../Header.tsx";
import {EmptySection} from "../EmptySection.tsx";
import {useEffect, useState} from "react";
import asignaturasInfo from "../../../../api/asignaturas.json";
import cursoInfo from "../../../../api/curso.json";
import {AsignaturaInfo} from "./Interfaces.ts";
import { CardAsignatura } from "./CardAsignatura.tsx";
import {PlusIcon} from "../../../../components/PlusIcon.tsx";
import {Link} from "react-router-dom";

type AsignaturasType = AsignaturaInfo[] | null

export const Asignaturas = () => {
  const [asignaturas, setAsignaturas] = useState<AsignaturasType>(null)

  useEffect(() => {
    setAsignaturas(asignaturasInfo)
  }, [] )

  const asignaturasActuales:AsignaturaInfo[] | undefined = asignaturas?.filter(asignatura => {
    return asignatura.anio_cursa === cursoInfo.anio_actual && asignatura.eval_cursa === cursoInfo.semestre_actual
  })

/*  const filtrarPorAnio = (anio: number): AsignaturaInfo[] | undefined => {
    return asignaturas?.filter(asignatura => asignatura.anio_cursa === anio);
  };*/

/*  const asignaturasCursosAnteriores = () => {

    for(let i: number = 1; i <= cursoInfo?.anio_actual; i++) {
      const asignaturasCurso = filtrarPorAnio(i)
    }
  }*/

  return(
    <section className="p-5 flex flex-col flex-grow">
      <Header title="Mis Asignaturas" subtitle="Todas tus asignaturas a simple vista"/>
      {/* if there is no subject*/}
      {asignaturas ? (
        <>
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-xl mb-4">Cursando actualmente</h2>
              <Link to="/dashboard/crear_asignatura" className="hover:scale-125 transition ease-in-out">
                <PlusIcon/>
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {asignaturasActuales?.map((asignatura: AsignaturaInfo, index: number) => (
                <CardAsignatura key={index} asignatura={asignatura}/>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-4">Cursos anteriores</h2>
            <h3>Tercero</h3>
            <div className="grid grid-cols-5 gap-3">
              {asignaturasActuales?.map((asignatura: AsignaturaInfo, index: number) => (
                <CardAsignatura key={index} asignatura={asignatura}/>
              ))}
            </div>
          </div>

        </>
      ) : (
        <>
          <div className="flex items-center flex-col flex-grow justify-center mt-4">
            <EmptySection titleButton="Añadir tu primera asignatura" title="No has creado ninguna asignatura aún."
                          subtitle="La información sobre todas tus asignaturas aparecerá aquí." url="crear_asignatura"/>
          </div>
        </>
      )}


    </section>
  )
}