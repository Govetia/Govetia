import httpService from './http.service';

const API_USER_URL = '/users'; // Assurez-vous que cette URL correspond à votre configuration proxy

// Récupérer tous les utilisateurs
export const getUsers = async () => {
  const response = await httpService.get(API_USER_URL);
  return response.data;
};

// Récupérer un utilisateur par ID
export const getUserById = async (id) => {
  const response = await httpService.get(`${API_USER_URL}/${id}`);
  return response.data;
};

// Créer un nouvel utilisateur
export const createUser = async (userData) => {
  const response = await httpService.post(API_USER_URL, userData);
  return response.data;
};

// Mettre à jour un utilisateur
export const updateUser = async (id, userData) => {
  const response = await httpService.put(`${API_USER_URL}/${id}`, userData);
  return response.data;
};

// Supprimer un utilisateur
export const deleteUser = async (id) => {
  await httpService.delete(`${API_USER_URL}/${id}`);
};
