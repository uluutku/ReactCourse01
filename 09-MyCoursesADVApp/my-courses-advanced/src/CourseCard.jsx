import React, { useState } from "react";
import "./CourseCard.css"; // Import CSS file for styling

function CourseCard({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCourse = () => {
        setCurrentIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const previousCourse = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    // Check if data is available
    if (!data || data.length === 0) {
        return <div className="course-card-container">No courses available</div>;
    }

    // Check if currentIndex is valid
    const currentCourse = data[currentIndex] || {};

    return (
        <div className="course-card-container">
            <div className="course-card">
                <h2>Course {currentIndex + 1}</h2>
                <p>Name: {currentCourse.title}</p>
                <p>Description: {currentCourse.content}</p>
                <p>Price: {currentCourse.price}</p>
            </div>
            <div className="button-container">
                <button onClick={previousCourse}>Previous</button>
                <button onClick={nextCourse}>Next</button>
            </div>
        </div>
    );
}

export default CourseCard;
