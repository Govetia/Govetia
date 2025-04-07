import httpService from './http.service';

const API_INVITATION_URL = '/invitations'; // Assurez-vous que cette URL correspond à votre configuration proxy

// Récupérer toutes les invitations
export const getInvitations = async () => {
  const response = await httpService.get(API_INVITATION_URL);
  return response.data;
};

// Récupérer une invitation par ID
export const getInvitationById = async (id) => {
  const response = await httpService.get(`${API_INVITATION_URL}/${id}`);
  return response.data;
};

// Créer une nouvelle invitation
export const createInvitation = async (invitationData) => {
  const response = await httpService.post(API_INVITATION_URL, invitationData);
  return response.data;
};

// Mettre à jour une invitation
export const updateInvitation = async (id, invitationData) => {
  const response = await httpService.put(`${API_INVITATION_URL}/${id}`, invitationData);
  return response.data;
};

// Supprimer une invitation
export const deleteInvitation = async (id) => {
  await httpService.delete(`${API_INVITATION_URL}/${id}`);
};

export const respondToInvitation = async (eventId, userId, name, status) => {
    const response = await httpService.post(`/invitations/respond`, { 
      eventId,
      userId,
      name,
      status
    });
    return response.data;
  };
