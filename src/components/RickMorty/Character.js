


import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';

const KEYS = {
    CHARACTERS: "characters"
}

export default function Character() {

    const [pageNumber, setPagNumber] = useState(1);

    const fetchCharacters = async ({ queryKey }) => {
        // console.log(queryKey[1])
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }
    const { data,  isLoading, isError, isSuccess} = useQuery([KEYS.CHARACTERS, pageNumber], fetchCharacters,{keepPreviousData: true});
  
    useEffect(()=>{
        if (isLoading) {
            console.log("Loading --",isLoading)
        }
        if (isError) {
            console.log("Error --",isError);
        }
        if(isSuccess){
            console.log("isSuccess --",isSuccess);
            console.log(data.results.slice(0,5))
        }
    },[data, isError, isLoading, isSuccess])

    const nextPage = () =>{
        setPagNumber(
            data.info.next != null ? p => p+=1 : pageNumber
        )
    }

    const prevPage = () =>{
        setPagNumber(p => Math.max(p-=1,1));
    }

    return (
        <div>
            <div className="d-flex align-items-baseline gap-2 mb-2">
                <button className='btn btn-primary shadow-sm' onClick={prevPage} disabled={!data || pageNumber === 1}>Prev</button>
                <button className='btn btn-light shadow-sm'>{pageNumber}</button>
                <button className='btn btn-primary shadow-sm' onClick={nextPage} disabled={!data || data.info.next === null}>Next</button>
            </div>
            
            <Row>
                {isSuccess && data.results.map(item => (
                    <CardView key={item.id} character={item} />
                ))}
            </Row>
        </div>
    )
}
