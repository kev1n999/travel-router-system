import type { DestinationDataProps } from "../components/destination-list";
import { constants } from "../config/constants";

export async function createDestination(
  travelId: string,
  latitude: number,
  longitude: number,
): Promise<DestinationDataProps> {
  const req = await fetch(
    `${constants.serverUrl}/travel/${travelId}/destinations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude: latitude, longitude: longitude }),
    },
  );
  const response = await req.json();
  if (!req.ok) throw new Error(response);
  return response.result;
}

export async function fetchDestinations(travelId: string): Promise<DestinationDataProps[]> {
  const req = await fetch(`${constants.serverUrl}/travel/${travelId}/destinations`);

  const response = await req.json();
  if (!req.ok) throw new Error(response);

  const data = response.destinations ?? [];
  return data.map((destination: any) => ({
    city: destination.display_name,
    latitude: destination.latitude,
    longitude: destination.longitude,
    order: destination.order,
    _id: destination._id,
  }));
}

export async function compareDestinations(
  travelId: string,
  lat_a: string,
  lon_a: string,
  lat_b: string,
  lon_b: string,
) {
  const req = await fetch(
    `${constants.serverUrl}/travel/${travelId}/destinations/compare?lat_a=${lat_a}&lon_a=${lon_a}&lat_b=${lat_b}&lon_b=${lon_b}`
  );

  const response = await req.json();
  if (!req.ok) throw new Error("Ocorreu um erro ao calcular, tente novamente!");

  return { 
    distance_km: response.distance_km,
    duration_min: response.duration_min,
  }
}

export async function deleteDestination(travelId: string, destinationId: string) {
  if (!travelId || !destinationId) throw new Error("The travelId and destinationId is required!");
  const req = await fetch(`${constants.serverUrl}/travel/${travelId}/destinations/${destinationId}`, {
    method: "DELETE",
  });

  const response = await req.json();
  if (!req.ok) throw new Error(`An error ocurred to delete the destination!\n${response}`);
  return response;
}