import React, { useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Chuks', isActive: true},
        {id: 2, name: 'Ada', isActive: false},
        {id: 3, name: 'Abuchi', isActive: true},
    ])
    const [showActiveOnly, setShowActiveOnly] = useState(false)

    const handleClick = () => setShowActiveOnly(!showActiveOnly)

  return (
    <div className='p-6 bg-white shadow-md rounded-lg max-w-md mx-auto'>
        <h3 className='text-2xl font-semibold mb-4 text-center'>User List</h3>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={handleClick}>
            {showActiveOnly ? 'Show All' : 'Show Active Only'}
        </button>
        <ul className='space-y-2 pt-4'>
            {
                (showActiveOnly ? users.filter(user => user.isActive) : users).map(user => (
                    <li key={user.id} className={`p-2 border-b ${user.isActive ? 'bg-green-100' : 'bg-red-100'}`}>
                        {user.name} ({user.isActive ? 'Active': 'Inactive'})
                    </li>
                ))
            }
        </ul>

    </div>
  )
}

export default UserList