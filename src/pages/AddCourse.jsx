import React, { useState } from "react";
import { toast } from "react-toastify";
import { addCourse } from "../services/allApi";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: "",
    courseCode: "",
    instructorName: "",
    duration: "",
    courseFee: "",
    date: "",
    Mode: "",
    sessionDuration: "",
    Description: "",
  });

  const onBtnClick = async () => {
    if (
      course.courseName === "" ||
      course.courseCode === "" ||
      course.instructorName === "" ||
      course.duration === "" ||
      course.courseFee === "" ||
      course.date === "" ||
      course.Mode === "" ||
      course.sessionDuration === "" ||
      course.Description === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const apiResponse = await addCourse(course);

      if (apiResponse.status === 201) {
        toast.success("Course added successfully");

        setCourse({
          courseName: "",
          courseCode: "",
          instructorName: "",
          duration: "",
          courseFee: "",
          date: "",
          Mode: "",
          sessionDuration: "",
          Description: "",
        });
      } else {
        toast.error("Something went wrong while adding course");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to add course");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-purple-700 mb-2">
            INSTITUTION MANAGEMENT
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Add New Course
          </h1>

          <p className="text-gray-600 mt-2">
            Enter the course details to add it to your institution's records.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Course Information
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Fill in the details below to register a new course.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Name
              </label>
              <input
                type="text"
                value={course.courseName}
                onChange={(e) =>
                  setCourse({ ...course, courseName: e.target.value })
                }
                placeholder="e.g. Full Stack Development"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Code
              </label>
              <input
                type="text"
                value={course.courseCode}
                onChange={(e) =>
                  setCourse({ ...course, courseCode: e.target.value })
                }
                placeholder="e.g. FSD101"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor Name
              </label>
              <input
                type="text"
                value={course.instructorName}
                onChange={(e) =>
                  setCourse({ ...course, instructorName: e.target.value })
                }
                placeholder="Enter instructor name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Duration
              </label>
              <input
                type="text"
                value={course.duration}
                onChange={(e) =>
                  setCourse({ ...course, duration: e.target.value })
                }
                placeholder="e.g. 6 months"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Fee (₹)
              </label>
              <input
                type="number"
                value={course.courseFee}
                onChange={(e) =>
                  setCourse({ ...course, courseFee: e.target.value })
                }
                placeholder="Enter course fee"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={course.date}
                onChange={(e) => setCourse({ ...course, date: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Learning Mode
              </label>
              <select
                value={course.Mode}
                onChange={(e) => setCourse({ ...course, Mode: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              >
                <option value="">Select learning mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Duration
              </label>
              <input
                type="text"
                value={course.sessionDuration}
                onChange={(e) =>
                  setCourse({ ...course, sessionDuration: e.target.value })
                }
                placeholder="e.g. 2 hours per day"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Description
              </label>
              <textarea
                rows="4"
                value={course.Description}
                onChange={(e) =>
                  setCourse({ ...course, Description: e.target.value })
                }
                placeholder="Describe the course, topics covered, and learning objectives..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-3">
              <button
                onClick={onBtnClick}
                className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition"
              >
                + Add Course
              </button>

              <button
                onClick={() =>
                  setCourse({
                    courseName: "",
                    courseCode: "",
                    instructorName: "",
                    duration: "",
                    courseFee: "",
                    date: "",
                    Mode: "",
                    sessionDuration: "",
                    Description: "",
                  })
                }
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Clear Form
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Institution Course Management System
        </p>
      </div>
    </div>
  );
};

export default AddCourse;
