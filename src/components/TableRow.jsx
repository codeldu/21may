import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'



export const CustomTableRow = ({id, name, price ,photo,  del , fn}) => {

const deleteItem = (id) => {
    axios.delete('http://localhost:3000/api/'+id).then(
        res => fn(!del)
    )
}

    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                <img src={photo} width='150px' height='100px' alt="" />
            </td>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
            <td>
                <button onClick={()=>deleteItem(id)}>
                    Delete
                </button>
            </td>
            <td>
                <Link to={'/edit/'+id}>
                    <button>Edit</button>
                </Link>
                    
            </td>
        </tr>
    )
}
