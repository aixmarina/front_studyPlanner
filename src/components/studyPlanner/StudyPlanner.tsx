import {Aside} from "./Aside.tsx";
import {Container} from "./Container.tsx";

export const StudyPlanner = () => {
  return (
    <>
      <main className="min-h-screen bg-pale2 flex">
        <Aside />
        <Container />
      </main>

    </>
  )
}