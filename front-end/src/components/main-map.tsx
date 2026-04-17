import { useState, useEffect} from "react";
import { searchDestination } from "../services/openstreetmap.service";
import MainContainerMap from "./leaflet-map";
import DestinationInput from "./destination-input";
import CreateTravelButton from "./create-travel";
import CreateTravelForm from "./create-travel-form";
import { compareDestinations, createDestination } from "../services/destination.service";
import type { DestinationDataProps } from "./destination-list";
import { fetchDestinations } from "../services/destination.service";
import DestinationList from "./destination-list";
import CompareDestinations from "./compare-destinations";
import { toast } from "react-hot-toast";

export default function MainMap() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [label, setLabel] = useState<string>("");
  const [destinationName, setDestinationName] = useState<string>("");
  const [isShow, setShow] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<DestinationDataProps[]>([]);
  const travelId = localStorage.getItem("travelId");
  const [latA, setLatA] = useState<string>("");
  const [lonA, setLonA] = useState<string>(""); 
  const [latB, setLatB] = useState<string>("");
  const [lonB, setLonB] = useState<string>("");

  const toastError = (message: string) => toast.error(message);

  const compareCallback = async () => {
    if (!travelId) return; 
    try {
      if (isNaN(Number(latA)) || isNaN(Number(lonA)) || isNaN(Number(latB)) || isNaN(Number(lonB))) {
        return toastError("Paramẽtros inválidos!");
      }
      if (!travelId || !latA || !lonA || !latB || !lonB) {
        return toastError("Paramêtros Faltando!");
      }
      try {
        const result = await compareDestinations(travelId, latA, lonA, latB, lonB);
        toast.success(`Distância: ${result.distance_km}\nTempo de viagem: ${result.duration_min}min`);
      } catch (err: any) {
        return toastError(err.message);
      }
    } catch (err) {
      console.error(err); 
    }
  }

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
      await createDestination(travelId, result.latitude, result.longitude);
      const data = await fetchDestinations(travelId);
      setDestinations(data);
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
    window.location.reload();
  };

  return (
    <div className="relative h-screen w-screen">
      {position && (
        <MainContainerMap position={position} label={label} createDestinationCallback={createNewDestination} />
      )}
      <div className="absolute flex flex-row gap-1 pt-2.5 left-1/2 -translate-x-1/2 z-1000 top-2 opacity-0 transition-all duration-300 hover:opacity-80">
        <DestinationInput value={destinationName} onChange={setDestinationName} onSearch={onSearch}/>
        <CreateTravelButton onClick={() => setShow(true)} />
      </div>
      {isShow && (
        <div className="absolute flex justify-center items-center z-1000">
          <CreateTravelForm onClose={() => setShow(false)} />
        </div>
      )}
      <div className="absolute top-0 right-0 h-100 w-80 bg-neutral-800 rounded-xl m-4 opacity-90 backdrop-blur-sm z-1000 shadow-lg p-4 overflow-y-auto">
        {destinations.length === 0 ? (
          <p className="text-white text-center">
            Nenhum destino encontrado
          </p>
        ) : (
          <DestinationList
            destinations={destinations}
            travelId={travelId!}
            onDelete={deleteHandler}
          />
        )}
      </div>

      <div className="absolute top-0 left-0 h-110 w-80 bg-neutral-800 rounded-xl m-4 opacity-90 backdrop-blur-sm z-1000 shadow-lg p-4 overflow-y-auto">
        <CompareDestinations latA={latA} lonA={lonA} latB={latB} lonB={lonB} setLatA={setLatA} setLonA={setLonA} setLatB={setLatB} setLonB={setLonB} compareCallback={compareCallback}/>
      </div>
    </div>
  );
}
