import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {Path} from "./Path.ts";
import {Landing} from "../pages/landing/Landing.tsx";
import {Register} from "../pages/register/Register.tsx";
import {Login} from "../pages/login/Login.tsx";
import {StudyPlanner} from "../pages/studyPlanner/StudyPlanner.tsx";
import {Home} from "../pages/studyPlanner/views/home/Home.tsx";
import {Tasks} from "../pages/studyPlanner/views/tasks/Tasks.tsx";
import {Course} from "../pages/studyPlanner/views/course/Course.tsx";
import {Subjects} from "../pages/studyPlanner/views/subjects/Subjects.tsx";
import {SubjectDetails} from "../pages/studyPlanner/views/subjectDetails/SubjectDetails.tsx";
import {CalendarView} from "../pages/studyPlanner/views/calendar/CalendarView.tsx";
import {SubjectFormCreate} from "../pages/studyPlanner/views/subjectForms/SubjectFormCreate.tsx";
import {CourseFormCreate} from "../pages/studyPlanner/views/courseForms/CourseFormCreate.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import {CourseFormEdit} from "../pages/studyPlanner/views/courseForms/CourseFormEdit.tsx";
import {SubjectFormEdit} from "../pages/studyPlanner/views/subjectForms/SubjectFormEdit.tsx";
import {TaskFormCreate} from "../pages/studyPlanner/views/taskForms/TaskFromCreate.tsx";
import {TaskFormEdit} from "../pages/studyPlanner/views/taskForms/TaskFormEdit.tsx";

export const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={Path.landing} Component={Landing} />
        <Route path={Path.register} Component={Register} />
        <Route path={Path.login} Component={Login} />
        <Route element={
          <ProtectedRoute>
            <StudyPlanner />
          </ProtectedRoute>
        }>
          <Route path={Path.home} Component={Home} />
          <Route path={Path.tasks} Component={Tasks} />
          <Route path={Path.course} Component={Course} />
          <Route path={Path.subjects} Component={Subjects} />
          <Route path={Path.subject} Component={SubjectDetails} />
          <Route path={Path.calendar} Component={CalendarView} />
          <Route path={Path.createSubject} Component={SubjectFormCreate} />
          <Route path={Path.editSubject} Component={SubjectFormEdit} />
          <Route path={Path.createCourse} Component={CourseFormCreate} />
          <Route path={Path.editCourse} Component={CourseFormEdit} />
          <Route path={Path.createTask} Component={TaskFormCreate} />
          <Route path={Path.editTask} Component={TaskFormEdit} />
        </Route>
      </Route>
    )
  )
