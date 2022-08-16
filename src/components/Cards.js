import React from 'react';
import Card from './Card';
import { useGetData } from '../hooks/useGetData';

const Cards = () => {
    const { data } = useGetData();
    console.log(data)

    return (
        <div className='cards'>
            {data.map(company => {
                return (<Card key={company.id} data={company} />)
            })}
        </div>
    )
}

export default Cards