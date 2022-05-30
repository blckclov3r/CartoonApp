

import React from 'react'
import { useQuery } from 'react-query';

const KEYS = {
    CHARACTERS: "characters"
}

export default function Character() {

    const fetchCharactes = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.json();
    }
    const {data, status} = useQuery(KEYS.CHARACTERS, fetchCharactes);
    if(status === "loading"){
        return <div>Loading ... </div>
    }
    if(status === "error"){
        return <div>Error... </div>
    }
    return (
        <div>
            {data && data.results.map(item => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>


    )
}
