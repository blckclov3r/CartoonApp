

import React, { useEffect, useState } from 'react'


export default function Character() {

    const [characters, setCharacters] = useState(null);

    const fetchCharactes = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data);
    }

    useEffect(() => {
        fetchCharactes();
    }, [])

    return (

        <div>
            {characters && characters.results.map(item => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>


    )
}
