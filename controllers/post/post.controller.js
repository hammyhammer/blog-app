import Post from "../../models/post.js"
import errorHandler from "../../utilities/error.js";

export const fetchAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find(
      {}, {
      _id: 1,
      title: 1,
      content: 1,

    }
    );
    if (allPosts) {
      return res.json(errorHandler(false, "Fetching Posts", allPosts))
    } else {
      return res.status(403).json(errorHandler(true, "Error Fetching Posts"))
    }
  }
  catch (error) {
    return res.status(400).json(errorHandler(true, "Error Fetching Users"))
  }
}

export const updatePostById = (req, res) => {
  try {
    Post.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (error, updatedPost) => {
        if (updatedPost) {
          res.json(errorHandler(false, "Updated Post", updatedPost))
        } else {
          return res.json(errorHandler(true, "Error updating Post", { error }))
        }
      }
    )
  } catch (error) {
    return res.json(true, "Error Updating Post")
  }
}
export const findPostById = (req, res) => {
  try {
    Post.findById(req.params.id, (error, foundPost) => {
      if (foundPost) {
        const { title, content } = foundPost
        return res.json(errorHandler(false, "User Found", {
          post: {
            title: `${title}`,
            content: `${content}`
          }
        }))
      } else {
        return res.json(errorHandler(true, "Trouble Finding Post"))
      }
    })
  } catch (error) {
    res.json(errorHandler(true, "Trouble Finding User"))
  }
}
export const deletePost = (req, res) => {
  try {
    Post.findByIdAndRemove(
      req.params.id,
      { new: true },
      (error, deletedPost) => {
        if (deletedPost) {
          return res.json(errorHandler(false, "Deleting Post", deletedPost))
        } else {
          return res.json(errorHandler(true, "Error deleting Post"))
        }
      })

  } catch (error) {
    return res.json(errorHandler(true, "Error deleting user"))
  }
};