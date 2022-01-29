import api from "./apiConfig.js";

export const getPosts = async () => {
  try {
    const res = await api.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}

export const getPost = async id => {
  try {
    const res = await api.get(`/products/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createPost = async post => {
  try {
    const res = await api.post('/new', post)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProduct = async (id, post) => {
  try {
    const res = await api.put(`/products/${id}`, post)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteProduct = async id => {
  try {
    const res = await api.delete(`/products/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}