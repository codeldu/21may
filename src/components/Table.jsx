import React from 'react'

export const CustomTable = ({children}) => {
  return (
    <table>
    <thead>
        <tr>
            <th>
                id
            </th>
            <th>
                name
            </th>
            <th>
                price
            </th>
            <th>
                Delete
            </th>
            <th>
                Edit
            </th>
        </tr>
    </thead>
    <tbody>
        {children}
    </tbody>
</table>
  )
}
