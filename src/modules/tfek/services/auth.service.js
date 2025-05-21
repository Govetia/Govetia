import httpService from './http.service';

export const registerUser = async (userData) => {
  try {
    const response = await httpService.post('/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
    const response = await httpService.post('/login', userData);
    if (response.data) {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      return response.data.user;
    } else {
      throw new Error('Invalid response');
    }

};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};
