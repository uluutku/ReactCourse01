import SingleCourse from "./SingleCourse";

function Courses({courses , relayDelete}) {

    return (
    <div className="course-renderer">
        <h2>Kurslarım</h2>
        <div className="card-container">
            {
                courses.map((singleCourse) => {
                    return(
                       // <SingleCourse coursesObject={singleCourse}/> Props ile
                       <SingleCourse key={singleCourse.id} {...singleCourse} removeOneCourse={relayDelete}/>
                    )

                })
            }
        </div>
    </div>);
}

export default Courses;