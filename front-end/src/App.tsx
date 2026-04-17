import { Toaster } from "react-hot-toast";
import MainMap from "./components/main-map";

export default function App() {
  return (
    <div className="relative h-screen w-screen">
      <Toaster position="bottom-right" />
      <MainMap />
    </div>
  )
}
