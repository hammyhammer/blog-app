<<<<<<< HEAD
import errorHandler from "../utilities/error.js";

const defaultController = async (req, res, next) => {
  res.json(errorHandler(false, "Home", "Welcome to our Blog App!"));
  res.status(200);
};

export default defaultController;
=======
import errorHandler from "../utilities/error";

const defaultController = async (req,res, next) => {
    res.json(errorHandler(false, "Home", "Welcome to my user API!"));
    res.status(200)
};

export default defaultController;
>>>>>>> 4b8b6c758f47ca59763efb5e67d97d29d2a1e6b0
