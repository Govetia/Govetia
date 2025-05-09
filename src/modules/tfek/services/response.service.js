import httpService from './http.service';

const API_EVENTS_URL = '/responses';

export const getParticipantReponsesByEventId = async (eventId) => {
  const response = await httpService.get(`${API_EVENTS_URL}/event/${eventId}`);
  return response.data;
}

export const deleteResponse = async (id) => {
  await httpService.delete(`${API_EVENTS_URL}/${id}`);
}
