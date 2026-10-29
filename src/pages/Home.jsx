import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-purple-700 font-semibold mb-4">
            EDUCATE • EMPOWER • EXCEL
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Manage
            <span className="block text-purple-700">Courses Efficiently.</span>
          </h1>

          <p className="text-gray-600 mt-5 leading-7">
            A centralized platform for educational institutions to organize
            courses, maintain trainer details, and manage course information
            efficiently.
          </p>

          <div className="flex gap-4 mt-7 flex-wrap">
            <Link
              to="/addcourse"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800"
            >
              + Add Course
            </Link>

            <Link
              to="/allcourse"
              className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100"
            >
              View Courses →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
          <div className="bg-purple-700 text-white rounded-xl p-6">
            <p className="text-purple-200 text-sm">INSTITUTION MANAGEMENT</p>

            <h2 className="text-2xl font-bold mt-3">
              Course Management Dashboard
            </h2>

            <p className="text-purple-100 mt-2 text-sm leading-6">
              Keep your institution's course information organized and easy to
              manage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <Link
              to="/addcourse"
              className="border rounded-xl p-5 hover:bg-purple-50 hover:border-purple-400 transition"
            >
              <div className="text-3xl">📚</div>
              <h3 className="font-bold text-gray-800 mt-3">Add Course</h3>
              <p className="text-sm text-gray-500 mt-2">
                Register new courses.
              </p>
            </Link>

            <Link
              to="/allcourse"
              className="border rounded-xl p-5 hover:bg-purple-50 hover:border-purple-400 transition"
            >
              <div className="text-3xl">📋</div>
              <h3 className="font-bold text-gray-800 mt-3">Course Records</h3>
              <p className="text-sm text-gray-500 mt-2">
                View and update course details.
              </p>
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-5">
            Organized • Reliable • Efficient
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Simplify Course Administration
          </h2>

          <p className="text-gray-500 mt-3">
            Essential tools to maintain your institution's course records.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl">➕</div>
              <h3 className="text-lg font-bold text-purple-700 mt-3">
                Course Registration
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Add new courses with names, codes, trainers, and duration.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl">🔍</div>
              <h3 className="text-lg font-bold text-purple-700 mt-3">
                Course Records
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                View and search course information whenever needed.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl">📝</div>
              <h3 className="text-lg font-bold text-purple-700 mt-3">
                Course Updates
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Edit course information and remove outdated records.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
