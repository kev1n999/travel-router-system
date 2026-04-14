import type { DestinationDataProps } from "../components/destination-list";
import { constants } from "../config/constants";

export async function fetchDestinations(travelId: string): Promise<DestinationDataProps[] | []> {
  const req = await fetch(`${constants.serverUrl}/travel/${travelId}/destinations`);
  const response = await req.json();
  if (!req.ok) throw new Error(response);
  if (!response.result) return [];

  const data = Array.isArray(response.result) ? response.result : [response.result];
  return data.map((destination) => ({
    city: destination.display_name,
    latitude: destination.latitude,
    longitude: destination.longitude,
    order: destination.order,
  }));
}
