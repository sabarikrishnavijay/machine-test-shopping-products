import React from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
function NavBar() {
    return (
        <div className='px-6 h-20 flex align-middle justify-center border-b-2'>
            <div className='flex-auto '>

            <GiHamburgerMenu className='w-6 h-6 m-3' />
            </div>
            <div className='flex-auto align-middle justify-center'>
                <h2 className='m-5 pl-[100px] font-extrabold' >BALACLAVA</h2>
            </div>
            <div className='flex-auto flex justify-end'>
                <AiOutlineSearch className='w-6 h-6 m-3 ' />
                <AiOutlineUser className='w-6 h-6 m-3 ' />
                <AiOutlineShoppingCart className='w-6 h-6 m-3 ' />

            </div>

        </div>
    )
}

export default NavBar