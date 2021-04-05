import { apiClient } from '../../../config/axios'

export const updateProfile = async ({ userId, formData }) => {
  return apiClient.put(`/users/${userId}`, formData)
}

export const updateAvatar = async ({ userId, data }) => {
  return apiClient.post(`/users/${userId}/avatar`, data)
}

export const getUserAvatar = async ({ userId }) => {
  return apiClient.get(`/users/${userId}/avatar`)
}
