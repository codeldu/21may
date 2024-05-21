import React from 'react'

export const CustomTableRow = ({id, name, price}) => {
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    )
}
