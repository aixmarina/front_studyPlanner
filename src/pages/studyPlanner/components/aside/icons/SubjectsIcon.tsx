import {Props} from "../../../../../types/interfaces.ts";

const SubjectsIcon= ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20"
         height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/>
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/>
      <path d="M3 6l0 13"/>
      <path d="M12 6l0 13"/>
      <path d="M21 6l0 13"/>
    </svg>
  )
}

export default SubjectsIcon