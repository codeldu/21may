import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export const Home = () => {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/').then(
      res => setinfo(res.data)
    )
  },[])

  const addToFav = (id) => {
    axios.get('http://localhost:3000/api/'+id).then(
      res => axios.post('http://localhost:3000/favorites/', res.data)
    )
  }

  return (

    <>
      {
        info.map(element => {
          return (
            <div id='card' key={element.id}>
              <p>{element.name}</p>
              <span>{element.price}</span>
              <button onClick={()=>addToFav(element.id)}>♥</button>
            </div>
          )
        })
      }

    </>
  )
}
