import httpService from './http.service';

// Enregistrer un nouvel utilisateur
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

// Connecter un utilisateur
export const loginUser = async (userData) => {
  try {
    const response = await httpService.post('/login', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

// Déconnecter l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Obtenir le token JWT
export const getToken = () => {
  return localStorage.getItem('token');
};
