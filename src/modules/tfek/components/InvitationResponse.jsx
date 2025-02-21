import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { respondToInvitation } from './services/invitationService';

const InvitationResponse = () => {
  const { idEvent, token } = useParams();
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await respondToInvitation(idEvent, token, { name, response });
      alert('Réponse enregistrée avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la réponse:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom"
        required
      />
      <select value={response} onChange={(e) => setResponse(e.target.value)} required>
        <option value="">Sélectionnez une réponse</option>
        <option value="accepted">J'accepte</option>
        <option value="declined">Je refuse</option>
      </select>
      <button type="submit">Envoyer la réponse</button>
    </form>
  );
};

export default InvitationResponse;
