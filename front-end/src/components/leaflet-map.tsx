import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from 'leaflet';
import ChangeView from './change-view';

interface MapProps {
  position: LatLngTuple;
  label: string;
}

// component to show the map
export default function MainContainerMap({ position, label }: MapProps) {
  return (
    <MapContainer
      center={position || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {position && <ChangeView position={position} />}

      (position && {
        <Marker position={position || [51.505, -0.09]}>
          <Popup>
            { label || "Destino" }
          </Popup>
        </Marker>
      })
    </MapContainer>
  )
}
