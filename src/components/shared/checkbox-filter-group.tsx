'use client';

import React, { useState, useEffect } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems = [],
    limit = 5,
    searchInputPlaceholder = 'Search...',
    className,
    onChange,
    defaultValue = [],
}) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);

    const handleCheckedChange = (value: string) => {
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
        setSelectedValues(newSelectedValues);
        onChange?.(newSelectedValues);
    };

    const filteredItems = (showAll ? items : defaultItems)
        .filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        .slice(0, showAll ? undefined : limit);

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {showAll && (
                <div className='mb-5'>
                    <Input
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={searchInputPlaceholder}
                        className='bg-gray-100 border-none'
                    />
                </div>
            )}

            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {filteredItems.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={selectedValues.includes(item.value)}
                        onCheckedChange={() => handleCheckedChange(item.value)}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
                        {showAll ? '- Hide' : '+ Show All'}
                    </button>
                </div>
            )}
        </div>
    );
};
