'use client'
import React, { useState } from 'react';
import Dropdown from '../PixelBlock/Dropdown'

const DropdownDemo2 = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleSelect = (selected: string[]) => {
        setSelectedOptions(selected);
    };

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3', disabled: true },
        { value: 'option4', label: 'Option 4' },
    ];
    return (
        <Dropdown
            options={options}
            withSearch={true}
            placeholder="Select options"
            onSelect={handleSelect}
            multiple={true}
            searchPlaceholder="Search options..."
            selectedOptions={selectedOptions}
            renderOption={(option) => (
                <div className={`p-2 ${option.disabled ? 'text-gray-400' : ''}`}>
                    {option.label}
                </div>
            )}
        />
    )
}

export default DropdownDemo2