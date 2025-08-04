import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='mt-2'>
       <nav className="border-2 border-b-black p-2 flex justify-center space-x-4">


<NavLink
to="/login"
className={({ isActive }) =>
isActive
  ? 'text-blue-600 underline font-bold'
  : 'text-blue-600 hover:underline'
}
>
Login
</NavLink>
<NavLink
to="/register"
className={({ isActive }) =>
isActive
  ? 'text-blue-600 underline font-bold'
  : 'text-blue-600 hover:underline'
}
>
Register
</NavLink>
<NavLink
to="/"
className={({ isActive }) =>
isActive
  ? 'text-blue-600 underline font-bold'
  : 'text-blue-600 hover:underline'
}
>
Dashboard
</NavLink>
</nav>
    </div>

  )
}
