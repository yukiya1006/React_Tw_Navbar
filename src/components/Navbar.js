import React from 'react'
import NavItem from './NavItem'
import {
  FaGamepad,
  FaBook,
} from 'react-icons/fa'

import {
  MdLiveTv,
  MdMovie,
} from 'react-icons/md'

import {
  BsMusicNoteBeamed,
  BsNewspaper,
} from 'react-icons/bs'

import {
  GiSportMedal,
} from 'react-icons/gi'

import {
  FiTrendingUp,
} from 'react-icons/fi'

export default function Navbar() {
  return (
    <div>
      <nav className='px-9 py-7'>
        <div className='flex justify-center items-center w-full overflow-x-auto px-5'>
          <NavItem title="Gaming" Icon={FaGamepad} />
          <NavItem title="Learning" Icon={FaBook} />
          <NavItem title="Live" Icon={MdLiveTv} />
          <NavItem title="Movies" Icon={MdMovie} />
          <NavItem title="Music" Icon={BsMusicNoteBeamed} />
          <NavItem title="News" Icon={BsNewspaper} />
          <NavItem title="Sports" Icon={GiSportMedal} />
          <NavItem title="Trending" Icon={FiTrendingUp} />
        </div>
      </nav>
    </div>
  )
}
