export default function CreateTravelButton({ onClick }: { onClick: () => void; }) {
  return (
    <button onClick={onClick} className="bg-blue-500 transition-colors duration-300 hover:bg-blue-600 rounded-sm p-0.5 cursor-pointer">
      Criar Viagem
    </button>
  )
}
