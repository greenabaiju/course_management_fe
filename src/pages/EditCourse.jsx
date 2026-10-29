
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCourse, updateCourse } from "../services/allApi";
import { toast } from "react-toastify";

const EditCourse = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    instructorName: "",
    duration: "",
    courseFee: "",
    Description: "",
  });

  useEffect(() => {
    getCourseData();
  }, [id]);

  const getCourseData = async () => {
    try {
      const response = await getSingleCourse(id);

      if (response.status === 200) {
        setCourseData(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get course");
    }
  };

  const onUpdateClick = async () => {
    try {
      const response = await updateCourse(id, courseData);

      if (response.status === 200) {
        toast.success("Course updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update course");
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 px-4 py-10">
      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl font-bold text-purple-800 mb-2">
          Edit Course
        </h1>

        <p className="text-gray-600 mb-6">
          Update your institution's course information.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">

          <div className="space-y-4">

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course Name
              </label>
              <input
                type="text"
                placeholder="Course Name"
                value={courseData.courseName}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    courseName: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course Code
              </label>
              <input
                type="text"
                placeholder="Course Code"
                value={courseData.courseCode}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    courseCode: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Instructor Name
              </label>
              <input
                type="text"
                placeholder="Instructor Name"
                value={courseData.instructorName}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    instructorName: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Duration
              </label>
              <input
                type="text"
                placeholder="e.g. 3 months"
                value={courseData.duration}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    duration: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course Fee (₹)
              </label>
              <input
                type="number"
                placeholder="Course Fee"
                value={courseData.courseFee}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    courseFee: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Course Description
              </label>
              <textarea
                placeholder="Course Description"
                value={courseData.Description}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    Description: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-purple-600 resize-none"
                rows="4"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onUpdateClick}
                className="flex-1 bg-purple-700 text-white p-3 rounded-lg font-semibold hover:bg-purple-800"
              >
                Update Course
              </button>

              <Link
                to="/allcourse"
                className="flex-1 text-center border border-gray-300 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-50"
              >
                Cancel
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
