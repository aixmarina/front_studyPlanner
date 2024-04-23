import {HeaderProps} from "./Interfaces.ts";


export const Header =  ({ title, subtitle}: HeaderProps) => {
  return (
    <header>
      <div className="flex items-end flex-col">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <hr className="border-gray-300 my-4"/>
    </header>
  )
}