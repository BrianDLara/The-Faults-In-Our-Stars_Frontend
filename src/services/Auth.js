import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/users/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateReview = async (data) => {
  try {
    const res = await Client.post(
      `/reviews/new_review/user/${data.userId}/zodiac_id/${data.zodiacId}`,
      data
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateReview = async (data) => {
  try {
    const res = await Client.put(`/reviews/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DestroyReview = async (data) => {
  try {
    const res = await Client.delete(`/reviews/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
