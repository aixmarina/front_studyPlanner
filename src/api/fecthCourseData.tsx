/*
import {CourseInterface} from "../pages/studyPlanner/dashboard/course/Interfaces.ts";
import useFetch from "../helper/customHooks/useFetch.ts";


export const fetchCourseData = async (courseId: number): Promise<{
  loading: boolean
  error: Error | null
  value: CourseInterface | undefined
}> => {
  const { loading, error, value } = useFetch<CourseInterface>(
    `http://127.0.0.1:8000/api/v1/courses/${courseId}`,
    {},
    [courseId]
  )

  return { loading, error, value }
}*/
