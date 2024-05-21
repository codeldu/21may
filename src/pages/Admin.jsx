import React from 'react'
import { CustomTable } from '../components/Table'
import { CustomTableRow } from '../components/TableRow'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const Admin = () => {

    const [info, setinfo] = useState([]);;

    useEffect(() => {
    axios.get('http://localhost:3000/api/').then(
        res => setinfo(res.data)
    )
    

       
    }, [])


    return (<>
        <CustomTable>
            {info.map((el)=> <CustomTableRow id={el.id} name={el.name} price={el.price}/>)}
        </CustomTable>

        <Link to='/add'>
            <button id='addNew'>Add new item</button>
        </Link>


    </>)
}
