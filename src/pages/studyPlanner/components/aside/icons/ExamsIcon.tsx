import {Props} from "../../../../../types/interfaces.ts";

const ExamsIcon= ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20"
         height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
      <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
      <path d="M12 12.496v1.504l1 1"/>
    </svg>
  )
}

export default ExamsIcon