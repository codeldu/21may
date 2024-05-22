import React from 'react'
import { CustomTable } from '../components/Table'
import { CustomTableRow } from '../components/TableRow'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const Admin = () => {

    const [info, setinfo] = useState([]);
    const [deleted, getDeleted] = useState(false);
    const [inpValue, setInpValue] = useState("");
    const [cngValue, setCngValue] = useState("def");

    useEffect(() => {
        axios.get('http://localhost:3000/api/').then(
            res => setinfo(res.data)
        )

    }, [deleted])

    const sortData = ()=> {
        if(cngValue == 'asc'){
            return info.toSorted((a,b)=> Number(a.price) - Number(b.price))
        }else if(cngValue == 'des'){
            return info.toSorted((a,b)=> Number(b.price) - Number(a.price))
        }else{
            return [...info]
        }
    }

    let sortedData = sortData()


    const filterData = sortedData.filter( (inf) => inf.name.toUpperCase().startsWith(inpValue.toUpperCase()))

    return (<>


        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '15px' }}>
            <input type="text" onInput={(e) => setInpValue(e.target.value)} />
            <select onChange={(e) => setCngValue(e.target.value)}>
                <option value="def">Default</option>
                <option value="asc">Artan sira ile</option>
                <option value="des">Azalan sira ile</option>
            </select>
        </div>

        <CustomTable>
            {filterData.map((el) => <CustomTableRow id={el.id} name={el.name} price={el.price} del={deleted} photo={el.photo} fn={getDeleted} />)}
        </CustomTable>

        <Link to='/add'>
            <button id='addNew'>Add new item</button>
        </Link>


    </>)
}
