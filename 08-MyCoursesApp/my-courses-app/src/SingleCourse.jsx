function SingleCourse({id,content,title,price, removeOneCourse}) {
    return (
    <div className="single-course-master">
        <div className="single-course-card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
            <p className="card-price">{price}TL</p>
            <div className="btn-container">
            <button className="delete-btn" onClick={() => removeOneCourse(id)}>Sil</button>
            </div>
        </div>
    </div>);
}

export default SingleCourse;