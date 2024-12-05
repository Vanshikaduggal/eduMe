// routes/course.route.js
import express from 'express';
import { createCourse, editCourse, getCourseById, getCreatorCourses } from '../controllers/course.controller.js';  // Make sure to include the .js extension
import isAuthenticated from '../middleware/isAuthenticated.js';  // Make sure to include the .js extension
import upload from '../utils/multer.js';

const router = express.Router();

// POST route to create a course, with authentication middleware
router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourses);
router.route("/:courseId").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);
router.route("/:courseId").get(isAuthenticated,getCourseById);
export default router;
