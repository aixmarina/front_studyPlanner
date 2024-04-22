import {ReactNode} from "react";

interface FeatureItemProps {
  icon:string
  title:string
  children: ReactNode
}

export const FeatureItem = ({ icon, title, children}: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 border-3 rounded-3xl w-64 h-64 shadow-lg">
      <div className="text-3xl text-blue-500 mb-4">
        <i className={`${icon} text-primary`}></i>
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}