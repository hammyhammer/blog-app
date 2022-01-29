import errorHandler from "../utilities/error";

const defaultController = async (req,res, next) => {
    res.json(errorHandler(false, "Home", "Welcome to my user API!"));
    res.status(200)
};

export default defaultController;