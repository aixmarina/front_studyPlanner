export interface HeaderProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export interface EmptySectionProps  extends HeaderProps{
  titleButton: string
  url: string
}

export interface SubjectInterface {
  name: string;
  description: string;
  year: number;
  semester: number;
  color: string;
}
/*
export enum State {
  pending = "PENDING",
  inProgress = "INPROGRESS",
  completed = "COMPLETED",
}*/

export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
/*  state: State*/
/*
  state: "pending" | "inProgress" | "completed"; //TODO: uncomment it when the backend is ready
*/
  state: string
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  date_ini: string;
  date_fin: string;
  tasks: Task[];
}

export interface SubjectDetailsInterface {
  id: number;
  name: string;
  description: string;
  year: number;
  semester: number;
  color: string;
  units: Unit[];
}

export interface Props {
  className?: string;
}
