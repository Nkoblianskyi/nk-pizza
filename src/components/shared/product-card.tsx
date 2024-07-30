import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                    <img className='w-[215px] h-[215px]' src={imageUrl} alt='Image product' />
                </div>

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />

                <p className='text-sm text-gray-400'>
                    Chicken, mozzarella, tomatoes, cheddar and parmesan cheese, basil, arugula, cheese sauce.
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span>
                        from <b>{price}</b>
                    </span>
                </div>

                <Button variant='secondary' className='text-base font-bold'>
                    <Plus size={20} className='m-1'/>
                    Add
                </Button>
            </Link>
        </div>
    );
};