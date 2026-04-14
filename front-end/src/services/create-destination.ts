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
