import { deleteDestination } from "../services/destination.service";

export interface DestinationDataProps {
  city: string;
  latitude: number;
  longitude: number;
  order: number;
  _id: string;
}

interface DestinationListProps {
  destinations: DestinationDataProps[];
  travelId: string; 
  onDelete: (destinationId: string) => void;
}

export default function DestinationList({ destinations, travelId, onDelete }: DestinationListProps) {
  const deleteDest = async (destinationId: string) => {
    try {
      console.log("deletando");
      await deleteDestination(travelId, destinationId);
      onDelete(destinationId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        {destinations.length === 0 && (
          <p className="text-white text-center">Nenhum destino encontrado</p>
        )}
        {destinations.map((destination) => (
          <div key={destination._id} className="p-2 text-white border rounded">
            <div className="flex justify-end">
              <button 
              onClick={() => deleteDest(destination._id)} 
              className="bg-red-600 cursor-pointer transition-colors duration-200 hover:bg-red-500 pl-2 pr-2 relative top-6 rounded-full">
                x
              </button>
            </div>

            <p><strong>{destination.order}.</strong> {destination.city}</p>
            <p>Lat: {destination.latitude}</p>
            <p>Lng: {destination.longitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
}