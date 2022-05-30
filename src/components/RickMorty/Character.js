

import React from 'react'
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';

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
    console.log(data)
    return (
        <Row>
            {data && data.results.map(item => (
                <CardView key={item.name} character={item} />
            ))}
        </Row>


    )
}
