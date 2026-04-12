export const constants = {
  openStreetMapURL: (destination: string) => `https://nominatim.openstreetmap.org/search?q=sao+paulo&format=json&q=${encodeURIComponent(destination)}`,
};
