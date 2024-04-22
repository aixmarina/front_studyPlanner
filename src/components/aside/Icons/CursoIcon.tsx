import {Props} from "./interface.ts";

const CursoIcon= ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20"
         height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
      <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
      <path d="M9 8h6"/>
    </svg>
  )
}

export default CursoIcon