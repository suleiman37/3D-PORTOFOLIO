import React, { useState } from 'react'
import { navLinks } from '../constant'
import clsx from 'clsx'


const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className='relative '>
      <div className='flex justify-between items-center px-4 py-4 lg:px-20 '>

        {/* LOGO */}
        <span className="font-bold text-primary">SULIEMAN</span>

        {/* MOBILE MENU */}
        <ul
          className={clsx(
            "lg:hidden font-bold flex flex-col space-y-6  z-10 bg-secondary-100 w-[500px] h-[200px] -top- absolute left-0 p-4 transition-all duration-300",
            open ? "top-14 opacity-100  bg-secondary-100" : "top-[-300px] opacity-0"
          )}
        >
          {navLinks.map((li) => (
            <li key={li.name} className="ml-4">
              <a href={li.href} className="hover:text-amber-300 text-primary">
                {li.name}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP MENU */}
        <ul className="max-lg:hidden font-bold flex space-x-10">
          {navLinks.map((li) => (
            <li key={li.name}>
              <a href={li.href} className="hover:text-amber-300 text-primary">
                {li.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle menu">
          <img src={`./assets/${open ? "close" : "menu"}.svg`} width={30} alt="menu" />
        </button>

      </div>
    </section>
  )
}

export default Navbar