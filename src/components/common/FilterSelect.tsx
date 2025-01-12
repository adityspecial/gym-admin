import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FilterSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...'
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;