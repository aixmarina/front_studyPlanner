import {Aside} from "./Aside.tsx";
import {Container} from "./Container.tsx";
import {useDispatch} from "react-redux";
import {changeComponent} from "../../Redux/componentSlice.ts";
import {PayloadAction} from "@reduxjs/toolkit";

export const StudyPlanner = () => {
  const dispatch = useDispatch()
  const handleClick = (component: string) => {
    dispatch(changeComponent(component) as PayloadAction<string>)
  }

  return (
    <>
      <main className="min-h-screen bg-pale2 flex">
        <Aside onClick={(component) => handleClick(component)}/>
        <Container />
      </main>

    </>
  )
}