import DestinationInput from "./components/destination-input";
import MainContainerMap from "./components/leaflet-map";

export default function App() {
  return (
    <div className="relative h-screen w-screen">
      <MainContainerMap />

      <div className="absolute left-8/12 top-2 z-1000">
        <DestinationInput />
      </div>
    </div>
  )
}
