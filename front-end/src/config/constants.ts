export const constants = {
  maxDestinations: 15, // limit of destinations in the travel
  openStreetMapURL: (destination: string) => `https://nominatim.openstreetmap.org/search?q=sao+paulo&format=json&q=${encodeURIComponent(destination)}`,
};
