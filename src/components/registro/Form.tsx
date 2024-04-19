import React from "react";

interface Props {
  children: React.ReactNode
  title: string
}

export const Form = ({ children, title }: Props) => {

  return (
    <div className="flex justify-center items-center px-6 py-8">
      <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded-xl shadow-xl">
        <h3 className="pb-8 text-2xl text-center text-dark font-bold italic">{title}</h3>
        {children}
      </form>
    </div>
  )
}