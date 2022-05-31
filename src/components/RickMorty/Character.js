


import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';

const KEYS = {
    CHARACTERS: "characters"
}

export default function Character() {

    const [page, setPage] = useState(1);

    useEffect(()=>{

    },[page])

    const fetchCharacters = async ({ queryKey }) => {
        // console.log(queryKey[1])
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }
    const { data, status } = useQuery([KEYS.CHARACTERS, page], fetchCharacters);
    // if (status === "loading") {
    //     return <div>Loading ... </div>
    // }
    // if (status === "error") {
    //     return <div>Error... </div>
    // }

    const nextPage = () =>{
        setPage(
            data.info.next != null ? p => p+=1 : page
        )
    }

    const prevPage = () =>{
        setPage(p => Math.max(p-=1,1));
    }

    return (
        <div>
            { data && <div className="d-flex align-items-baseline gap-2 mb-2">
                <button className='btn btn-primary shadow-sm' onClick={prevPage} disabled={page === 1}>Prev</button>
                <button className='btn btn-light shadow-sm'>{page}</button>
                <button className='btn btn-primary shadow-sm' onClick={nextPage} disabled={data.info.next === null}>Next</button>
            </div>}
            { !data && <div className="d-flex align-items-baseline gap-2 mb-2">
                <button className='btn btn-primary shadow-sm'  disabled>Prev</button>
                <button className='btn btn-light shadow-sm'>{page}</button>
                <button className='btn btn-primary shadow-sm' disabled>Next</button>
            </div>}
            
            <Row>

                {data && data.results.map(item => (
                    <CardView key={item.id} character={item} />
                ))}
            </Row>
        </div>
    )
}
