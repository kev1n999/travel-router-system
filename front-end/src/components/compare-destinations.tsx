interface CompareDestinationsProps {
  latA: string;
  lonA: string;
  latB: string;
  lonB: string;
  
  compareCallback: () => void;
  setLatA: (v: string) => void;
  setLonA: (v: string) => void;
  setLatB: (v: string) => void;
  setLonB: (v: string) => void;
}

// Component to compare time and distance between two destinations
export default function CompareDestinations({
  latA,
  lonA,
  latB,
  lonB,
  compareCallback,
  setLatA,
  setLonA,
  setLatB,
  setLonB,
}: CompareDestinationsProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    compareCallback();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-neutral-800 z-1000 gap-2.5"
    >
      <h1 className="text-center text-2xl text-white">
        Comparar Destinos
      </h1>

      <div className="flex gap-2 flex-col bg-neutral-700 p-5 rounded-xl">
        <label className="text-white">Destino A</label>
        <input
          value={latA}
          onChange={(e) => setLatA(e.target.value)}
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="latitude"
        />
        <input
          value={lonA}
          onChange={(e) => setLonA(e.target.value)}
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="longitude"
        />
      </div>

      <div className="flex gap-2 flex-col bg-neutral-700 p-5 rounded-xl">
        <label className="text-white">Destino B</label>
        <input
          value={latB}
          onChange={(e) => setLatB(e.target.value)}
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="latitude"
        />
        <input
          value={lonB}
          onChange={(e) => setLonB(e.target.value)}
          className="p-1 placeholder:text-neutral-200 rounded-sm border border-blue-400 outline-none text-white"
          placeholder="longitude"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full rounded-sm p-2 bg-blue-500 text-white transition-colors hover:bg-blue-600"
      >
        Calcular
      </button>
    </form>
  );
}