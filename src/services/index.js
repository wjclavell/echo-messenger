import Api from './apiConfig';
import { changeHeader, clearHeader } from './apiConfig';

export const updateUser = async (userData) => {
  try {
    const resp = await Api.put('cloud_msg/UserProfiles', userData);
      return resp
  }
  catch(err) {
    throw err
  }
}

export const login = async (userData) => {
  try {
      const resp = await Api.post('auth/users/login/', userData);
      if (resp.status === 200) {
          await clearHeader();
          await localStorage.setItem('token', resp.data.token);
          await changeHeader();
      }
      return resp;
  } catch (error) {
      throw error
  }
}

export const register = async (userData) => {
  try {
      const resp = await Api.post('auth/users/register/', userData);
      if (resp.status === 201) {
          await clearHeader();
          await localStorage.setItem('token', resp.data.token);
          await changeHeader();
      }
      return resp;
  } catch (error) {
      throw error
  }
}