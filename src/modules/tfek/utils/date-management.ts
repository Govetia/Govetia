export const formatDate = (date: string) => {
    let formattedDate = new Date(date);
    let day = String(formattedDate.getDate()).padStart(2, '0');
    let month = String(formattedDate.getMonth() + 1).padStart(2, '0');
    let year = formattedDate.getFullYear();
    let hours = String(formattedDate.getHours()).padStart(2, '0');
    let minutes = String(formattedDate.getMinutes()).padStart(2, '0');
  
    return `${day}/${month}/${year} à ${hours}:${minutes}`;
  };