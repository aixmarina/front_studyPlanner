import {Landing} from "./pages/landing/Landing.tsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Register} from "./pages/register/Register.tsx";
import {Login} from "./pages/login/Login.tsx";
import {StudyPlanner} from "./pages/studyPlanner/StudyPlanner.tsx";
import {Home} from "./pages/studyPlanner/dashboard/home/Home.tsx";
import {Tasks} from "./pages/studyPlanner/dashboard/tasks/Tasks.tsx";
import {Course} from "./pages/studyPlanner/dashboard/course/Course.tsx";
import {Subjects} from "./pages/studyPlanner/dashboard/subjects/Subjects.tsx";
import {Calendar} from "./pages/studyPlanner/dashboard/calendar/Calendar.tsx";
import {Notes} from "./pages/studyPlanner/dashboard/notes/Notes.tsx";
import {Exams} from "./pages/studyPlanner/dashboard/exams/Exams.tsx";
import {CourseFormCreate} from "./pages/studyPlanner/dashboard/courseFormCreate/CourseFormCreate.tsx";
import {SubjectFormCreate} from "./pages/studyPlanner/dashboard/subjectFormCreate/SubjectFormCreate.tsx";
import {Path} from "./config/Path.ts";
import {SubjectDetails} from "./pages/studyPlanner/dashboard/subjectDetails/SubjectDetails.tsx";

const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={Path.landing} Component={Landing} />
        <Route path={Path.register} Component={Register} />
        <Route path={Path.login} Component={Login} />
        <Route Component={StudyPlanner}>
          <Route path={Path.home} Component={Home} />
          <Route path={Path.tasks} Component={Tasks} />
          <Route path={Path.course} Component={Course} />
          <Route path={Path.subjects} Component={Subjects} />
          <Route path={Path.subject} Component={SubjectDetails} />
          <Route path={Path.calendar} Component={Calendar} />
          <Route path={Path.notes} Component={Notes} />
          <Route path={Path.exams} Component={Exams} />
          <Route path={Path.createSubject} Component={SubjectFormCreate} />
          <Route path={Path.createCourse} Component={CourseFormCreate} />
        </Route>
      </Route>
    )
  )

function App() {
  return (
    <RouterProvider router={getRouter()} />
  )
}

export default App