interface SearchButtonProps {
  onSearch: () => void;
}

export default function SearchButton({ onSearch }: SearchButtonProps) {
  return (
    <button onClick={onSearch} className="text-white bg-blue-500 transition-colors duration-300 hover:bg-blue-600 rounded-sm p-0.5 cursor-pointer">Buscar</button>
  )
}
