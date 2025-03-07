import httpService from './http.service';

const API_EVENTS_URL = '/events';

// Récupérer tous les événements
export const getEvents = async () => {
  const response = await httpService.get(API_EVENTS_URL);
  return response.data;
};

// Récupérer un événement par ID
export const getEventById = async (id) => {
  return httpService.get(`${API_EVENTS_URL}/${id}`);
};

export const getEventByInvitationToken = async (invitationToken) => {
  const response = await httpService.noAuth.get(`${API_EVENTS_URL}/by_token/${invitationToken}`);
  return response.data;
};

// Créer un nouvel événement
export const createEvent = async (eventData) => {
  return httpService.post(API_EVENTS_URL, eventData);
};

// Mettre à jour un événement
export const updateEvent = async (id, eventData) => {
  const response = await httpService.put(`${API_EVENTS_URL}/${id}`, eventData);
  return response.data;
};

// Supprimer un événement
export const deleteEvent = async (id) => {
  await httpService.delete(`${API_EVENTS_URL}/${id}`);
};
