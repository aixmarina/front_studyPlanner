import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Header } from "../components/Header.tsx";
import { useEffect, useState } from "react";
import { es } from 'date-fns/locale/es';
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import axios from "../../../../api/axios.ts";
import {SubjectInterface} from "../types/Interfaces.ts";

export const CalendarView = () => {
  const { course } = useCurrentUser()

  const [events, setEvents] = useState<EventInterface[]>([]);

  interface EventInterface {
    id: number;
    title: string;
    subtitle: string;
    start: Date;
    end: Date;
    description: string;
    color: string;
  }

  interface EventProp {
    event: EventInterface
  }

  useEffect(() => {
    const handleSubjectsData = async () => {
      if(course)  {
        const response = await axios.get(`/v1/courses/${course.id}/subjects`)
        const events: EventInterface[] = response.data.data.flatMap((subject:SubjectInterface) =>
          subject.tasks.map(task => ({
            id: task.id,
            title: task.name,
            subtitle: subject.name,
            start: new Date(task.deadline),
            end: new Date(task.deadline),
            description: task.description,
            color: subject.color,
          }))
        )
        setEvents(events)
      }
    }
    handleSubjectsData()
  }, []);

  const EventComponent = ({ event }: EventProp) => {
    return (
      <div className="rounded">
        <div className="text-sm">{event.title}</div>
        <div className="flex">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: event.color }}></div>
          <div className="text-xs overflow-hidden">{event.subtitle}</div>
        </div>
      </div>
    )
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: { es }
  });

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos",
  };

  return (
    <section className="p-5 flex flex-col flex-grow">
      <Header title="Calendario" subtitle="Todas las tareas del mes en un vistazo" />
      <Calendar
        className="m-5"
        localizer={localizer}
        events={events}
        components={{ event: EventComponent }}
        messages={messages}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </section>
  )
}

