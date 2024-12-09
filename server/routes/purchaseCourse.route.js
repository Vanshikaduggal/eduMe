import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { confirmPurchaseManually, createCheckoutSession, getAllPurchasedCourse, getCourseDetailWithPurchaseStatus} from "../controllers/coursePurchase.controller.js";

const router = express.Router();

router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/confirm-purchase").post(isAuthenticated, confirmPurchaseManually);
router.route("/course/:courseId/detail-with-status").get(isAuthenticated,getCourseDetailWithPurchaseStatus);

router.route("/").get(isAuthenticated,getAllPurchasedCourse);

export default router;