import SearchButton from "./search-button";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function DestinationInput({ value, onChange, onSearch }: Props) {
  return (
    <div className="flex flex-row gap-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") onSearch(); }}
        className="outline-none rounded-sm bg-white border border-neutral-400 p-1 font-normal placeholder:text-sm"
        placeholder="Buscar um destino específico..."
      />
      <SearchButton onSearch={onSearch} />
    </div>
  );
}
