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
  return new Promise((resolve, reject) => {
    console.log('ici');
    httpService.post('/login', userData).then((response) => {
      console.log('Login response:', response);
      if (response.data) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        resolve(response.data.user);
      } else {
        reject(new Error('Invalid response'));
      }
    }).catch((error) => {
      console.error('Login error:', error);
      reject(error);
    });
  })

};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};
