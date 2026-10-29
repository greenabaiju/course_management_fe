import axiosConfig from "./axiosConfig";
import { BASEURL } from "./BaseURL";

export const addCourse = async (reqBody) => {
  return await axiosConfig("post", `${BASEURL}/courses`, reqBody);
};

export const getCourse = async () => {
  return await axiosConfig("get", `${BASEURL}/courses`);
};

export const getSingleCourse = async (id) => {
  return await axiosConfig("get", `${BASEURL}/courses/${id}`);
};

export const updateCourse = async (id, reqBody) => {
  return await axiosConfig("put", `${BASEURL}/courses/${id}`, reqBody);
};

export const deleteCourse = async (id) => {
  return await axiosConfig("delete", `${BASEURL}/courses/${id}`);
};