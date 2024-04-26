import {Link, useLocation} from "react-router-dom";
import {getNavigationData} from "./constants.tsx";
import {NavigationInterface} from "./Interfaces.ts";

export const Aside = () => {
  const location = useLocation()

  return(
    <aside className="py-5 px-8 w-80 flex flex-col justify-between">
      <div>
        <div className="flex gap-5 mb-6">
          <img src="/logo2.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="titulo"/>
        </div>
        <hr className="border-gray-300 my-4 w-64"/>
        <div className="text-gray-500 flex flex-col gap-3 text-base mt-6">
          {getNavigationData().map((item: NavigationInterface, index: number) => (
            <Link to={`${item.link}`} key={index}>
              <div className={`flex gap-2 items-center pl-3 h-9 ${location.pathname.includes(item.link) && "font-bold bg-white text-dark rounded-md shadow"}  hover:text-dark hover:font-bold`}>
                {item.icon}
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <hr className="border-gray-300 my-8 w-64"/>
      </div>
      <div className="bg-white rounded-xl py-2 px-3 flex shadow justify-between items-center">{/* this should be dynamic*/}
        <img className="rounded-full" src="https://i.pravatar.cc/40" alt="foto de perfil"/>
        <div className="text-xs">
          <p>Marina Aix</p>
          <p className="text-gray-600">marinaaix4@gmail.com</p>
        </div>
        <div>
          <i className="fas fa-chevron-down text-gray-600"></i>
        </div>
      </div>
    </aside>
  )
}