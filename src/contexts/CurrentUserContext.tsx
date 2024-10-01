import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "../api/axios.ts";
import {CourseInterface} from "../pages/studyPlanner/views/course/Interfaces.ts";

export interface UserType {
  id: number
  name: string
  email: string
}

interface UserContextType {
  user: UserType | null;
  course: CourseInterface | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  setCourse: React.Dispatch<React.SetStateAction<CourseInterface | null>>;
  fetchUser: () => Promise<void>;
  fetchCourseData: (userId: number) => Promise<void>;
  logoutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

const LOCAL_STORAGE_USER_KEY = 'user'
const LOCAL_STORAGE_COURSE_KEY = 'course'

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [course, setCourse] = useState<CourseInterface | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    if(storedUser) {
      setUser(JSON.parse(storedUser))
    }

    const storedCourse = localStorage.getItem(LOCAL_STORAGE_COURSE_KEY)
    if(storedCourse) {
      setCourse(JSON.parse(storedCourse))
    }
  }, [])

  const fetchUser = async () => {
    try {
      const response = await axios.get('/user')
      const userData = response.data
      setUser(userData)
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  }

  const fetchCourseData = async (userId?: number) => {
    const id = userId
    if(!id) return;
    try {
      const response = await axios.get(`/v1/courses/by-user/${id}`)
      if(response.data) {
        const courseData = response.data.data[0]
        console.log(courseData, "curso")
        setCourse(courseData)
        localStorage.setItem(LOCAL_STORAGE_COURSE_KEY, JSON.stringify(courseData));
      }
    } catch (error) {
      console.error(error)
    }
  }

  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    localStorage.removeItem(LOCAL_STORAGE_COURSE_KEY)
    setUser(null)
    setCourse(null)
  }

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser, course, setCourse, fetchCourseData, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
