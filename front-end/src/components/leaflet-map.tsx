import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from 'leaflet';
import ChangeView from './change-view';

interface MapProps {
  position: LatLngTuple;
  label: string;
  createDestinationCallback: () => void;
}

// component to show the map
export default function MainContainerMap({ position, label, createDestinationCallback }: MapProps) {
  return (
    <MapContainer
      center={position || [51.505, -0.09]}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      {position && <ChangeView position={position} />}

      (position && {
        <Marker position={position || [51.505, -0.09]}>
          <Popup>
            {label || "Selecione algum destino"}
            <div className="p-2 relative right-2">
              <button onClick={createDestinationCallback} className="rounded-sm cursor-pointer transition-colors duration-300 hover:bg-blue-500 p-1 bg-blue-400 text-white">
                Adicionar destino
              </button>
            </div>
          </Popup>
        </Marker>
      })
    </MapContainer>
  )
}