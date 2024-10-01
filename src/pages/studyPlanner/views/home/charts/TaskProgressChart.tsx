import {Bar} from 'react-chartjs-2';
import {SubjectInterface} from "../../types/Interfaces.ts";
import {BarElement, CategoryScale, Chart, ChartOptions, Legend, LinearScale, Tooltip} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

interface ProgressBySubject {
  [key: string]: {
    pending: number
    inProgress: number
    complete: number
  }
}

const TaskProgressChart = ({ subjects }: { subjects: SubjectInterface[]}) => {
  const getSubjectsName = () => subjects.map(subject => subject.name)

  const getProgressBySubject = () => {
    const progressBySubject: ProgressBySubject = {}

    subjects.forEach(subject => {
      progressBySubject[subject.name] = { pending: 0, inProgress: 0, complete: 0 }
      subject.tasks.forEach(task => {
        if (task.state === 'pending') {
          progressBySubject[subject.name].pending += 1
        } else if (task.state === 'inProgress') {
          progressBySubject[subject.name].inProgress += 1
        } else if (task.state === 'complete') {
          progressBySubject[subject.name].complete += 1
        }
      })
    })

    return progressBySubject
  }

  const generateChartData = () => {
    const progressBySubject = getProgressBySubject()
    const subjectsNames = getSubjectsName()

    return {
      labels: subjectsNames,
      datasets: [
        {
          label: 'Por hacer',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          data: subjectsNames.map(name => progressBySubject[name]?.pending || 0)
        },
        {
          label: 'En progreso',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          data: subjectsNames.map(name => progressBySubject[name]?.inProgress || 0)
        },
        {
          label: 'Completadas',
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          data: subjectsNames.map(name => progressBySubject[name]?.complete || 0)
        }
      ]
    }
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  return <Bar data={generateChartData()} options={options} />
}

export default TaskProgressChart
