import { constants } from "../config/constants";

export async function fetchDestinations(travelId: string) {
  const req = await fetch(`${constants.serverUrl}/travel/${travelId}/destinations`);

  const response = await req.json();
  if (!req.ok) throw new Error(response);

  const data = response.destinations ?? [];
  return data.map((destination) => ({
    city: destination.display_name,
    latitude: destination.latitude,
    longitude: destination.longitude,
    order: destination.order,
    _id: destination._id,
  }));
}