import type { LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";

// function to update the view by destination
export default function ChangeView({ position }: { position: LatLngTuple }) {
  const map = useMap();
  map.setView(position, 13);
  return null;
}
