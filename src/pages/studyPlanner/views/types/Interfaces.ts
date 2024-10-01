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
  id ?: number
  name: string;
  description: string;
  year: number;
  semester: number;
  color: string;
  tasks: Task[]
}

export enum State {
  pending = "pending",
  inProgress = "inProgress",
  complete = "complete",
}

export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
  state: State;
  subject_id: number;
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
