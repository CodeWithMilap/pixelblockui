"use client"
import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options: { value: string; label: string; disabled?: boolean }[];
  withSearch?: boolean;
  placeholder: string;
  onSelect: (selected: string[]) => void;
  multiple?: boolean;
  renderOption?: (option: { value: string; label: string; disabled?: boolean, isSelected: boolean }) => React.ReactNode;
  searchPlaceholder?: string;
  selectedOptions?: string[];
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  withSearch = false,
  placeholder,
  onSelect,
  multiple = false,
  renderOption,
  searchPlaceholder = 'Search...',
  selectedOptions = [],
  isOpen: controlledIsOpen,
  onOpenChange,
}) => {
  const [isOpen, setIsOpen] = useState(controlledIsOpen ?? false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selected, setSelected] = useState<string[]>(selectedOptions);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  useEffect(() => {
    if (selectedOptions) {
      setSelected(selectedOptions);
    }
  }, [selectedOptions]);

  const toggleDropdown = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (option: string) => {
    let newSelected;
    if (multiple) {
      if (selected.includes(option)) {
        newSelected = selected.filter(item => item !== option);
      } else {
        newSelected = [...selected, option];
      }
    } else {
      newSelected = [option];
      setIsOpen(false);
    }
    setSelected(newSelected);
    onSelect(newSelected);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      onOpenChange?.(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderOptionDefault = (option: { value: string; label: string; disabled?: boolean }) => {
    const isSelected = selected.includes(option.value);
    return (
      <div
        className={`py-2 text-sm hover:bg-blue-50 hover:text-inherit hover:dark:bg-slate-900 px-3  ${isSelected ? 'bg-blue-500 text-white' : ''} ${option.disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {option.label}
      </div>
    );
  };

  return (
    <div className="relative w-64 border border-gray-300 rounded-md overflow-hidden" ref={dropdownRef}>
      <button
        className="bg-white dark:bg-transparent px-3 py-2 flex justify-between items-center cursor-pointer w-full text-md"
        onClick={toggleDropdown}
      >
        <span>{selected.length > 0 ? selected.map(sel => options.find(opt => opt.value === sel)?.label).join(', ') : placeholder}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ms-3 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 border-t border-gray-300 bg-white w-full dark:bg-zinc-700 overflow-hidden">
          {withSearch && (
            <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-search"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={searchPlaceholder}
                />
              </div>
            </div>
          )}
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={`${option.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {renderOption
                  ? renderOption({ ...option, isSelected: selected.includes(option.value) })
                  : renderOptionDefault(option)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
