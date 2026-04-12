import { constants } from "../config/constants";

type Cordinates = {
  latitude: number;
  longitude: number;
  displayName: string;
};

// function to fetch a specific destination by the user input
export async function searchDestination(name: string): Promise<Cordinates> {
  const url = constants.openStreetMapURL(name);
  const request = await fetch(url, { method: "GET", });

  if (!request.ok) throw new Error("An error ocurred to fetch the destination!");
  const response = await request.json();

  const latitude = parseFloat(response[0].lat);
  const longitude = parseFloat(response[0].lon);
  const displayName = response[0].display_name;

  return { latitude, longitude, displayName };
}
