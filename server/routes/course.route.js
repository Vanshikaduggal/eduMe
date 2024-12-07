// routes/course.route.js
import express from 'express';
import { createCourse, createLecture, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourses, getLectureById, removeLecture } from '../controllers/course.controller.js';  // Make sure to include the .js extension
import isAuthenticated from '../middleware/isAuthenticated.js';  // Make sure to include the .js extension
import upload from '../utils/multer.js';
const router = express.Router();

// POST route to create a course, with authentication middleware
router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);
router.route("/:courseId/lecture").post(isAuthenticated,createLecture)
router.route("/:courseId/lecture").get(isAuthenticated,getCourseLecture)
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated,editLecture)
router.route("/lecture/:lectureId").delete(isAuthenticated, removeLecture);
router.route("lecture/:lectureId").get(isAuthenticated,getLectureById)

export default router;
