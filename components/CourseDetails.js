import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Extracting the course ID from the query parameters

  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details based on the ID from the URL
    const fetchCourseDetails = async () => {
      try {
        // You can replace this fetch call with your actual API call to fetch course details
        const response = await fetch(`/api/courses/${id}`); // Assuming you have an API endpoint for fetching course details
        if (response.ok) {
          const data = await response.json();
          setCourse(data);
        } else {
          throw new Error("Failed to fetch course details");
        }
      } catch (error) {
        console.error(error);
        // Handle error (e.g., display an error message)
      }
    };

    if (id) {
      fetchCourseDetails();
    }
  }, [id]);

  if (!course) {
    return <div>Loading...</div>; // Display a loading indicator while fetching course details
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-2">Price: {course.price}</p>
      <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
    </div>
  );
};

export default CourseDetails;
