import HomeIcon from "./icons/HomeIcon.tsx";
import CourseIcon from "./icons/CourseIcon.tsx";
import SubjectsIcon from "./icons/SubjectsIcon.tsx";
import TasksIcon from "./icons/TasksIcon.tsx";
import CalendarIcon from "./icons/CalendarIcon.tsx";
import NotesIcon from "./icons/NotesIcon.tsx";
import ExamsIcon from "./icons/ExamsIcon.tsx";
import {NavigationInterface} from "./Interfaces.ts";

export const getNavigationData = (): NavigationInterface[] => [
  {
    title: "Home",
    link: '/dashboard/home',
    icon: <HomeIcon />
  },
  {
    title: "Mi Curso",
    link: '/dashboard/course',
    icon: <CourseIcon />
  },
  {
    title: "Asignaturas",
    link: '/dashboard/subjects',
    icon: <SubjectsIcon />
  },
  {
    title: "Tareas",
    link: '/dashboard/tasks',
    icon: <TasksIcon />
  },
  {
    title: "Calendario",
    link: '/dashboard/calendar',
    icon: <CalendarIcon />
  },
  {
    title: "Notas",
    link: '/dashboard/notes',
    icon: <NotesIcon />
  },
  {
    title: "Exámenes",
    link: '/dashboard/exams',
    icon: <ExamsIcon />
  }
]