import { useEffect , useState } from 'react'
import './App.css'
import axios from "axios"
import Courses from './Courses'
import Loading from './Loading'

function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const deleteCourseById = (toDeleteId) => {
    const afterDeletedCourses = courses.filter((mappedByFilterCourse) => mappedByFilterCourse.id !== toDeleteId)
    setCourses(afterDeletedCourses);
  }

  const fetchCourses = async () => {
    setLoading(true)
    try{
    const apiResponse =  await axios.get("http://localhost:3000/courses");
    setCourses(apiResponse.data);
    setLoading(false)
    }
    catch(error){
    setLoading(false)
    }
    
  }

  useEffect(() => {
    fetchCourses();
  },[])

  return (
    <div className='app-component'>
    {loading ? (<Loading/>) : 
    <Courses courses={courses} relayDelete={deleteCourseById} />}
    </div>
  )
}

export default App
