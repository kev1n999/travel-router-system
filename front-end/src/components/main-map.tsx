import { useState, useEffect} from "react";
import { searchDestination } from "../services/openstreetmap";
import MainContainerMap from "./leaflet-map";
import DestinationInput from "./destination-input";
import CreateTravelButtton from "./create-travel";
import CreateTravelForm from "./create-travel-form";
import { createDestination } from "../services/create-destination";
import type { DestinationDataProps } from "./destination-list";
import { fetchDestinations } from "../services/fetch-destinations";
import DestinationList from "./destination-list";

export default function MainMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [label, setLabel] = useState<string>("");
  const [destinationName, setDestinationName] = useState<string>("");
  const [isShow, setShow] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<DestinationDataProps[]>([]);
  const travelId = localStorage.getItem("travelId");

  useEffect(() => {
    if (!travelId) return;
    const load = async () => {
      try {
        const data: DestinationDataProps[] = await fetchDestinations(travelId);
        setDestinations(data);
      } catch (err) {
        console.error(err);
      }
    };

    load();
  }, [travelId]);

  const createNewDestination = async () => {
    if (!travelId) return;
    try {
      const result = await searchDestination(destinationName);
      const destination = await createDestination(travelId, result.latitude, result.longitude);
      const addCityName = { ...destination, city: result.displayName };
      setDestinations((prev) => [...prev, addCityName]);
      return destination;
    } catch (err) {
      console.error(err);
    }
  };

  const onSearch = async () => {
    if (!destinationName) return;
    const result = await searchDestination(destinationName);

    setPosition([result.latitude, result.longitude]);
    setLabel(result.displayName);
  };

  const deleteHandler = (destinationId: string) => {
    setDestinations((prev) => prev.filter(d => d._id !== destinationId));
  };

  return (
    <div className="relative h-screen w-screen">
      <MainContainerMap position={position} label={label} createDestinationCallback={createNewDestination} />
      <div className="absolute flex flex-row gap-1 pt-2.5 left-1/2 -translate-x-1/2 z-1000 top-2 opacity-0 transition-all duration-300 hover:opacity-80">
        <DestinationInput value={destinationName} onChange={setDestinationName} onSearch={onSearch}/>
        <CreateTravelButtton onClick={() => setShow(true)} />
      </div>
      {isShow && (
        <div className="absolute flex justify-center items-center z-1000">
          <CreateTravelForm onClose={() => setShow(false)}/>
        </div>
      )}
      {destinations.length > 0 && (
        <div className="absolute top-0 right-0 h-100 w-80 bg-neutral-800 rounded-xl m-4 opacity-90 backdrop-blur-sm z-1000 shadow-lg p-4 overflow-y-auto">
          <DestinationList destinations={destinations} travelId={travelId!} onDelete={deleteHandler} />
        </div>
    )}
    </div>
  );
}
