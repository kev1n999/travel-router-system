import { useState } from "react";
import { createTravel } from "../services/travel.service";
import CreateTravelButton from "./create-travel";

export default function CreateTravelForm({ onClose }: { onClose: () => void; }) {
  const [name, setName] = useState<string>("");
  const createNewTravel = async (): Promise<void> => {
    if (!name) return;
    const travelId = await createTravel(name);
    localStorage.setItem("travelId", travelId);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-neutral-500 p-6 rounded-xl shadow-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-4xl text-white mb-4">Criar viagem</h1>
          <label className="text-blue-500 block mb-1">
            Digite o nome da viagem
          </label>
          <input onChange={(i) => setName(i.target.value)} className="w-full border rounded-sm outline-none" />
          <CreateTravelButton onClick={createNewTravel} />
        </form>
      </div>
    </div>
  );
}