import React, { useEffect, useState } from 'react';
import { getCourses } from "../api/courseApi";

const CourseRow = props => {
  const course = props.course;
  return (
    <tr>
      <td>{course.title}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  )
}

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => <CourseRow key={course.id} course={course} />)}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPage;