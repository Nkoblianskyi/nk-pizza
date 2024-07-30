'use client'

import { cn } from '@/lib/utils';
import React from 'react';
import { useCategoryStore } from '../../../store/category';

interface Props {
    className?: string;
}

const cats = [
    { id: 1, name: 'Pizzas' },
    { id: 2, name: 'Combo' },
    { id: 3, name: 'Appetizer' },
    { id: 4, name: 'Drinks' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Drinks' },
    { id: 7, name: 'Desserts' },
];

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    const handleClick = (name: string) => {
        const element = document.getElementById(name.replace(/\s+/g, '-'));
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Додаємо відступ для заголовка
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={cn('inline-flex gap-1 bg-gray-100 p-1 rounded-2xl', className)}>
            {
                cats.map(({ id, name }, index) => (
                    <a 
                        className={cn(
                            'flex items-center font-bold h-11 rounded-2xl px-5',
                            categoryActiveId === id && 'bg-white shadow-sm shadow-gray-200 text-primary'
                        )}
                        key={index}
                        onClick={() => handleClick(name)}
                    >
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};
