import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export const Favorites = () => {

    const [info, setinfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/favorites/').then(
            res => setinfo(res.data)
        )
    }, [])



    return (
        <>
            {
                info.map(element => {
                    return (
                        <div id='card' key={element.id}>
                            <p>{element.name}</p>
                            <span>{element.price}</span>
                        </div>
                    )
                })
            }

            {!info.length && <h1>Hec bir mehsul elave edilmeyib</h1>}

        </>
    )
}
