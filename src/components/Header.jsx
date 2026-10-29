
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      <h2 className="text-2xl font-bold text-purple-700">
        EduManage
      </h2>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-purple-700"
        >
          Home
        </Link>

        <Link
          to="/allcourse"
          className="text-gray-700 font-medium hover:text-purple-700"
        >
          Courses
        </Link>

        <Link
          to="/addcourse"
          className="bg-purple-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-800"
        >
          + Add Course
        </Link>
      </div>
    </nav>
  );
};

export default Header;
