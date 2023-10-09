import { SelectContent } from "./styles";

interface SelectProps {
  htmlFor: string;
  id: string;
  labelText: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function Select({ htmlFor, id, labelText, onChange }: SelectProps) {
  return (
    <SelectContent>
      <label htmlFor={htmlFor}>{labelText}</label>
      <select onChange={onChange} id={id}>
        <option value=""></option>
        <option value="External wash">External wash</option>
        <option value="Wax">Wax</option>
        <option value="Interior cleanising">Interior cleanising</option>
      </select>
    </SelectContent>
  );
}
