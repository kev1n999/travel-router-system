import { useState } from "react";
import { searchDestination } from "../services/openstreetmap";
import MainContainerMap from "./leaflet-map";
import DestinationInput from "./destination-input";
import CreateTravelButtton from "./create-travel";
import CreateTravelForm from "./create-travel-form";

export default function MainMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [label, setLabel] = useState<string>("");
  const [destinationName, setDestinationName] = useState<string>("");
  const [isShow, setShow] = useState<boolean>(false);

  const onSearch = async () => {
    if (!destinationName) return;
    const result = await searchDestination(destinationName);

    setPosition([result.latitude, result.longitude]);
    setLabel(result.displayName);
  };

  return (
    <div className="relative h-screen w-screen">
      <MainContainerMap position={position} label={label} />
      <div className="absolute flex flex-row gap-1 left-1/2 -translate-x-1/2 z-1000 top-2 opacity-0 transition-all duration-300 hover:opacity-80">
        <DestinationInput value={destinationName} onChange={setDestinationName} onSearch={onSearch}/>
        <CreateTravelButtton onClick={() => setShow(true)} />
      </div>
      {isShow && (
        <div className="absolute flex justify-center items-center z-1000">
          <CreateTravelForm onClose={() => setShow(false)}/>
        </div>
      )}
    </div>
  );
}
