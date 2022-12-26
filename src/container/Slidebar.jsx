import React from 'react'
import logo from '../../src/logo.svg'
import {FiSearch} from "react-icons/fi"
function Slidebar() {
  return (
    <div className='bg-red-600 h-16 shadow-xl shadow-gray-900 flex justify-evenly items-center'>


      <div className='flex gap-2 justify-around'>
        <div>
          <div >logo</div>
        </div>
        
      </div>
      <div>
        <div className='border-2 h-5 w-40 flex gap-2 p-10 '> <div className=''><FiSearch/></div> search</div>
      </div>
      <div className='flex gap-4 justify-end'>
        <div>home</div>
        <div>about us</div>
        <div>contract</div>
        <div>result</div>
      </div>
    </div>
  
   

  )
}

export default Slidebar