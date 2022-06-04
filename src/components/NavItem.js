import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ Icon, title }) {
  return (
    <NavLink to={title.toLowerCase()} //リンク先を指定
      className="flex flex-col items-center cursor-pointer group w-12 px-16" 
      activeClassName="text-red-600">
        <Icon size={40} className="mb-1"/>
        <p className='font-semibold opacity-0 group-hover:opacity-100'>{title}</p>
    </NavLink>
  )
}
