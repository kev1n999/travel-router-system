import { useState } from "react";
import { searchDestination } from "../services/openstreetmap";
import MainContainerMap from "./leaflet-map";
import DestinationInput from "./destination-input";

export default function MainMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [label, setLabel] = useState<string>("");
  const [destinationName, setDestinationName] = useState<string>("");

  const onSearch = async () => {
    if (!destinationName) return;
    const result = await searchDestination(destinationName);

    setPosition([result.latitude, result.longitude]);
    setLabel(result.displayName);
  };

  return (
    <div className="relative h-screen w-screen">
      <MainContainerMap position={position} label={label} />

      <div className="absolute left-1/2 top-2 z-1000">
        <DestinationInput value={destinationName} onChange={setDestinationName} onSearch={onSearch}
        />
      </div>
    </div>
  );
}
