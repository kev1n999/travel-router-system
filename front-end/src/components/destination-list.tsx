export interface DestinationDataProps {
  city: string;
  latitude: number;
  longitude: number;
  order: number;
}

interface DestinationListProps {
  destinations: DestinationDataProps[];
}

export default function DestinationList({ destinations }: DestinationListProps) {
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        {destinations.length === 0 && (
          <p className="text-white text-center">Nenhum destino encontrado</p>
        )}

        {destinations.map((destination) => (
          <div key={destination.order} className="p-2 text-white border rounded">
            <p><strong>{destination.order}.</strong> {destination.city}</p>
            <p>Lat: {destination.latitude}</p>
            <p>Lng: {destination.longitude}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
