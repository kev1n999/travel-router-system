interface CompareDestinationsProps {
  // onChange: () => void;
  compareCallback?: () => void;
}

// Component to compare time and distance between two destinations
export default function CompareDestinations({
  compareCallback,
}: CompareDestinationsProps) {
  return (
    <form className="flex flex-col bg-neutral-800 0 z-1000 gap-2.5">
      <h1 className="text-center text-2xl text-white">Comparar Destinos</h1>
      <div className="flex gap-2 flex-col bg-neutral-700 p-5 rounded-xl">
        <label className="text-white">Destino A</label>
        <input
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="latitude"
        />
        <input
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="longitude"
        />
      </div>

      <div className="flex gap-2 flex-col bg-neutral-700 p-5 rounded-xl">
        <label className="text-white">Destino B</label>
        <input
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="latitude"
        />
        <input
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="longitude"
        />
      </div>

      <button
        onClick={compareCallback}
        className="cursor-pointer w-full rounded-sm p-2 bg-blue-500 text-white transition-colors hover:bg-blue-600"
      >
        Calcular
      </button>
    </form>
  );
}
