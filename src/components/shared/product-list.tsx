'use client'

import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '../../../store/category';

interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductList: React.FC<Props> = ({
    title,
    items,
    className,
    listClassName,
    categoryId
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

    return (
        <div className={className} id={title.replace(/\s+/g, '-')}>
            <Title text={title} size='lg' className='gotn-extrabold mb-5' />
            <div ref={intersectionRef} className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items
                    .filter((product) => product.items.length > 0)
                    .map((product, index) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                        />
                    ))}
            </div>
        </div>
    );
};
