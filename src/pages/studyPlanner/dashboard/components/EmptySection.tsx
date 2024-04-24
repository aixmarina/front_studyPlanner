import Empty from "../../../../assets/empty.png";
import {Link} from "react-router-dom";
import {Button} from "../../../../components/Button.tsx";
import {EmptySectionProps} from "../types/Interfaces.ts";

export const EmptySection = ({title, subtitle, titleButton, url}: EmptySectionProps) => {
  return (
    <>
      <img className="w-96" src={Empty} alt="empty page"/>
      <p className=" text-lg text-gray-800 mt-[-40px]">{title}</p>
      <p className="text-gray-600 mb-8">{subtitle}</p>
      <Link to={`/dashboard/${url}`}>
        <Button type="secondary">{titleButton}</Button>
      </Link>
    </>

  )
}