import axios from 'axios';

import { SIGN_IN_ENDPOINT } from '@constants/routes'

export const UserSigninAuth = async (data: any) => {
  try {
    const response = await axios.post(SIGN_IN_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};