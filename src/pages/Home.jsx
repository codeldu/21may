import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

export const Home = () => {

  const [info, setinfo] = useState([]);;

  useEffect(() => {
    axios.get('http://localhost:3000/api/').then(
      res => setinfo(res.data)
    )
  })

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

    </>
  )
}
