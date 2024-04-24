import React, {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode
  type: string
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, type, className }) => {

  return (
    <button className={`${type === 'primary' ? 'bg-primary text-white ' : 'bg-white text-primary'} rounded-lg text-base px-4 border-primary border-2 font-bold hover:opacity-75 py-2 ${className}`}>
      {children}
    </button>
  )
}