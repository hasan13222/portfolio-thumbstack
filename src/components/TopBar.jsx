'use client'
import React from 'react'
import {BiMenu} from 'react-icons/bi'

const TopBar = ({showMenu, setShowMenu}) => {
  return (
    <>
        <div className="topBar">
            <h1>Jamil</h1>
            <BiMenu
            onClick={() => setShowMenu(!showMenu)}
            />
        </div>
    </>
  )
}

export default TopBar