import {format} from "date-fns";
import {es} from "date-fns/locale";

const currentDate: Date = new Date();
export const getFullDateDescription:string = format(currentDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }).replace(/^\w/, c => c.toUpperCase());

export const getSpanishFormatDate = (dateString: string) : string => format(new Date(dateString), 'dd/MM/yyyy', { locale: es })