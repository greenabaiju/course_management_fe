
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCourse, getCourse } from "../services/allApi";
import { toast } from "react-toastify";

const AllCourse = () => {
  const [course, setCourse] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    try {
      const response = await getCourse();
      setCourse(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to get courses");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      const response = await deleteCourse(id);

      if (response.status === 200) {
        toast.success("Course deleted successfully");
        getCourseData();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete course");
    }
  };

  const filterCourses = course.filter((eachCourse) =>
    eachCourse.courseName?.toLowerCase().includes(searchVal.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            All Courses
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your institution's course information.
          </p>
        </div>

        {/* Search and Add */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between mb-6">
          <input
            type="text"
            placeholder="Search course by name..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full sm:max-w-sm border border-gray-300 bg-white rounded-lg px-4 py-3 outline-none focus:border-purple-600"
          />

          <Link
            to="/addcourse"
            className="bg-purple-700 text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-purple-800"
          >
            + Add Course
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filterCourses.map((eachCourse) => (
            <div
              key={eachCourse.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {eachCourse.courseName}
              </h2>

              <p className="text-sm text-purple-700 font-medium mb-4">
                Course Code: {eachCourse.courseCode}
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">
                    Instructor:
                  </span>{" "}
                  {eachCourse.instructorName}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">
                    Duration:
                  </span>{" "}
                  {eachCourse.duration}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">
                    Course Fee:
                  </span>{" "}
                  ₹{eachCourse.courseFee}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">
                    Mode:
                  </span>{" "}
                  {eachCourse.Mode}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">
                    Session Duration:
                  </span>{" "}
                  {eachCourse.sessionDuration}
                </p>

                <p>
                  <span className="font-semibold text-gray-800">
                    Start Date:
                  </span>{" "}
                  {eachCourse.date}
                </p>
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4">
                <p className="text-sm text-gray-600 leading-6">
                  {eachCourse.Description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <Link
                  to={`/editcourse/${eachCourse.id}`}
                  className="bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-purple-800"
                >
                  Edit
                </Link>

                <button
                  onClick={() => onDeleteClick(eachCourse.id)}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

       
       

      </div>
    </div>
  );
};

export default AllCourse;
