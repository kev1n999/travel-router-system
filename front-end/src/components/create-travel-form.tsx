export default function CreateTravelForm({ onClose }: { onClose: () => void; }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white p-6 rounded-xl shadow-lg">
        <form>
          <h1 className="text-4xl text-white mb-4">Criar viagem</h1>
          <label className="text-blue-500 block mb-1">
            Digite o nome da viagem
          </label>
          <input className="w-full border rounded-sm outline-none" />
          <button className="rounded-sm bg-blue-500 p-1 relative mt-4 cursor-pointer">
            Criar Viagem
          </button>
        </form>
      </div>
    </div>
  );
}
