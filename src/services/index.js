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