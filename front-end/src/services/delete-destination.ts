import { constants } from "../config/constants";

export async function deleteDestination(travelId: string, destinationId: string) {
  if (!travelId || !destinationId) throw new Error("The travelId and destinationId is required!");
  const req = await fetch(`${constants.serverUrl}/travel/${travelId}/destinations/${destinationId}`, {
    method: "DELETE",
  });

  const response = await req.json();
  if (!req.ok) throw new Error(`An error ocurred to delete the destination!\n${response}`);
  return response;
}