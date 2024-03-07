import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "./CourseCard"; // Import CourseCard component

function GetFromApi() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3004/courses");
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    });

    return (
        <div>
             <CourseCard data={courses} />
        </div>
    );
}

export default GetFromApi;
