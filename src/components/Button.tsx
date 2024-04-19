import React from "react";

interface ButtonProps {
  title: string
  type: string
}

export const Button: React.FC<ButtonProps> = ({ title, type }) => {

  return (
    <button className={`${type === 'primary' ? 'bg-primary text-white ' : 'bg-white text-primary'} rounded-lg text-base px-4 border-primary border-2 font-bold hover:opacity-75`}>
      {title}
    </button>
  )
}