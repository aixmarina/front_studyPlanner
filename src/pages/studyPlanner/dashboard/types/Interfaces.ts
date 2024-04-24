export interface HeaderProps {
  title: string
  subtitle: string
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

export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: string;
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
