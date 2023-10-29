"use client"
import { categories } from '@/Constants'
import { usePathname } from 'next/navigation'

import React from 'react'
import NavLink from './NavLink'

export const NavLinks = () => {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName.split('/').pop() === path
  }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 max-w-6xl mx-auto text-xs md:text-sm gap-4 pb-10 border-b'>
        {categories.map((category)=>(
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}
