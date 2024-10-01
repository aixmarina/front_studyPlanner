import React, {ReactNode} from "react";

interface ButtonProps {
  children: ReactNode
  type: string
  className?: string
  onClickHandler?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, type, className, onClickHandler }) => {

  return (
    <button className={`${type === 'primary' ? 'bg-primary text-white' : type === 'danger' ? ' text-red-600 border-red-600 border-2' : 'bg-white text-primary border-primary border-2'} rounded-lg text-base px-4 font-bold hover:opacity-75 py-2 ${className}`}
            onClick={onClickHandler}
    >
      {children}
    </button>
  )
}