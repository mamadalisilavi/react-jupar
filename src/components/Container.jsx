import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Container({children}) {
  return (
    <div className='container mx-auto px-2'>{children}</div>
  )
}
