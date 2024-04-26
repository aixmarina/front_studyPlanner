import {HeaderProps} from "../types/Interfaces.ts";

export const Header =  ({ title, subtitle, children}: HeaderProps) => {
  return (
    <header>
      <div className={`flex ${children ? ' justify-between' : 'justify-end'}`}>
        { children }
        <div className={`flex flex-col items-end`}>
          <h1 className="font-bold">{title}</h1>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
      <hr className="border-gray-300 my-4"/>
    </header>
  )
}