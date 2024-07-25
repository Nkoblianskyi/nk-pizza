import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const items = [
        { text: 'Cheese sauce', value: '1' },
        { text: 'Cream sauce', value: '2' },
        { text: 'Mozzarella', value: '3' },
        { text: 'Tomato', value: '4' },
        { text: 'Ham', value: '5' },
        { text: 'Chicken', value: '6' },
        { text: 'Corn', value: '7' },
        { text: 'Cheese sauce', value: '8' },
        { text: 'Cream sauce', value: '9' },
        { text: 'Mozzarella', value: '10' },
        { text: 'Tomato', value: '11' },
        { text: 'Ham', value: '12' },
        { text: 'Chicken', value: '13' },
        { text: 'Corn', value: '14' },
    ];

    return (
        <div className={className}>
            <Title text='Filtration' size='sm' className='mb-5 font-bold' />

            {/* Top CheckBox */}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Make pizza' value='12312312' />
                <FilterCheckbox text='New' value='12342' />
            </div>

            {/* Filtration price */}
            <div className='mt-5 border-y border-y-neutral-100 py-5 pb-7'>
                <p className='font-bold mb-3'>Price from and to</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={100} defaultValue={0} />
                    <Input type='number' min={10} max={100} placeholder='100' />
                </div>
                <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
            </div>

            <CheckboxFilterGroup
                title='Ingredients'
                className='mt-5'
                limit={5}
                defaultItems={items}
                items={items}
            />
        </div>
    );
};
