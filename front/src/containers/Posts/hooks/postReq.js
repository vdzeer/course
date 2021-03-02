import { apiClient } from '../../../config/axios'

export const getPosts = async ({ limit }) => {
  return apiClient.get(`/posts?limit=${limit}`)
}

export const getOnePost = async ({ postId }) => {
  return apiClient.get(`/posts/${postId}`)
}

export const createPost = async ({ formData }) => {
  return apiClient.post('/posts', formData)
}

export const updatePost = async ({ postId, formData }) => {
  return apiClient.put(`/posts/${postId}`, formData)
}
