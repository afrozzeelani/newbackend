// const express = require("express");
// const employeeRoute = express.Router();

// const {
//   verifyAdminHR,
//   verifyEmployee
// } = require("../middleware/authMiddleware");

// const {
//   getAllEmployee,
//   createEmployee,
//   updateEmployee,
//   deleteEmployee
// } = require("../controllers/employeeController");
// const { fileUploadMiddleware, checkFileSize } = require("../middleware/multer");

// // GET: Retrieve all countries
// employeeRoute.get("/employee/", verifyAdminHR, getAllEmployee);
// employeeRoute.get("/employee/:id", verifyEmployee, getAllEmployee);

// // POST: Create a new employee
// // verifyAdminHR
// employeeRoute.post(
//   "/employee",
//   verifyAdminHR,
//   fileUploadMiddleware,
//   checkFileSize,
//   createEmployee
// );

// // PUT: Update an existing employee
// employeeRoute.put(
//   "/employee/:id",
//   verifyAdminHR,
//   fileUploadMiddleware,
//   checkFileSize,
//   updateEmployee
// );

// // DELETE: Delete a employee
// // employeeRoute.delete("/employee/:id", verifyAdminHR, deleteEmployee);

// module.exports = employeeRoute;
const express = require("express");
const employeeRoute = express.Router();

// const {
//   verifyAdminHR,
//   verifyEmployee
// } = require("../middleware/authMiddleware");

const {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  findParticularEmployee,
  selectedDeleteNotification,
  deleteNotification,
  notificationStatusUpdate,
  multiSelectedDeleteNotification,
  deleteEmployee
} = require("../controllers/employeeController");
const { fileUploadMiddleware, checkFileSize } = require("../middleware/multer");

// GET: Retrieve all countries
employeeRoute.get("/employee/", getAllEmployee);
employeeRoute.get("/employee/:id?", getAllEmployee);
employeeRoute.get("/particularEmployee/:id", findParticularEmployee);
employeeRoute.post("/notificationStatusUpdate/:id", notificationStatusUpdate);
employeeRoute.post("/notificationDeleteHandler/:id", deleteNotification);
employeeRoute.post(
  "/multiSelectedNotificationDelete",
  multiSelectedDeleteNotification
);
employeeRoute.post("/selectedNotificationDelete", selectedDeleteNotification);
// POST: Create a new employee
// verifyAdminHR
employeeRoute.post(
  "/employee",

  fileUploadMiddleware,
  checkFileSize,
  createEmployee
);

// PUT: Update an existing employee
employeeRoute.put(
  "/employee/:id",

  fileUploadMiddleware,
  checkFileSize,
  updateEmployee
);

// DELETE: Delete a employee
// employeeRoute.delete("/employee/:id", verifyAdminHR, deleteEmployee);

module.exports = employeeRoute;
