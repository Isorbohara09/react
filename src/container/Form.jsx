import React from 'react'

function Form() {
  return (
    <div className='mx-auto'>
      <form>
  <label>
    Name:
    <input className='border w-50' type="text" name="name" />
    <br />
    <input type="date" name="date" id="" />
  </label><br />
 Gender:
 <input type="radio" name="same" id="" />male
 <input type="radio" name="same" id="" />female
 <input type="radio" name="same" id="" />abeen
 <br />
 <button className='bg-red-500   text-white hover:bg-black'>submit</button>
</form>
    </div>
  )
}

export default Form