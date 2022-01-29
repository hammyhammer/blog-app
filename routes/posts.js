import express from "express";
import defaultController from "../controllers/defaultController.js";
// import { authRequired } from "../controllers/auth/authController.js";

import { fetchAllUsers, deleteUser, updateUser, findUserById } from "../controllers/user/user.controller.js"; //USER CONTROLLER
// import { signUpUser, loginUser, logoutUser } from "../controllers/auth/authController.js"; //AUTH CONTROLLER

const Router = express.Router();

/**
 * Home Route
 */
Router.get("/", defaultController)

  /**
   * Create/Signup User
   */
  // .post("/signup", signUpUser)

  /**
   * Get all user(s)
   */
  .get("/users", fetchAllUsers)

  /**
   * Login Route
   */
  // .post("/login", loginUser)

  /**
   * Logout User
   */
  // .get("/logout", logoutUser)

  /**
   * Delete User
   */
  .delete('/delete/:id', deleteUser)

  /**
   * Updating user
   */
  .put("/update/:userName", updateUser)

  /**
   * Finding user by id
   */
  .get("/user/:id", findUserById)
export default Router;
