import errorHandler from "../utilities/error.js";

const defaultController = async (req, res, next) => {
  res.json(errorHandler(false, "Home", "Welcome to our Blog App!"));
  res.status(200);
};

export default defaultController;
