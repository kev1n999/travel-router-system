import { constants } from "../config/constants";

export async function createTravel(name: string): Promise<string> {
  if (!name) throw new Error("An error ocurred! The paramter name is missing.");
  const request = await fetch(`${constants.serverUrl}/create-travel`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, })
  });

  const response = await request.json();
  if (!request.ok) throw new Error(`An error ocurred to create the travel!Result: \n${response}`);
  return response.result._id;
}
