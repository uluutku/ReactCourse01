import React, { useState } from "react";
import axios from "axios";
import "./NewCourseForm.css"

function NewCourseForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !price) return;

        try {
            const response = await axios.post("http://localhost:3004/courses", {
                title,
                content,
                price
            });
            console.log("Course created:", response.data);
            setTitle("");
            setContent("");
            setPrice("");
        } catch (error) {
            console.error("Error creating course:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <input
                    type="text"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button type="submit">Add Course</button>
        </form>
    );
}

export default NewCourseForm;
