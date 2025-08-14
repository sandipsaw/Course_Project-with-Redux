import React from 'react'

const LogIn = () => {
  return (
   <form className='flex flex-col w-100 border p-10 gap-10' onSubmit={handleSubmit(submitHandler)}>
      <input {...register("title")} className='outline-none text-2xl border-b' type='text' placeholder='Course Name : '/>
      <input {...register("description")} className='outline-none text-2xl border-b' type='text' placeholder='Course description : '/>
      <input {...register("image")} className='outline-none text-2xl border-b' type='url' placeholder='url of image : '/>
      <input {...register("price")} className='outline-none text-2xl border-b' type='number' placeholder='price : '/>
      <select 
      className='outline-none text-2xl border-b'
      defaultValue=""
      {...register("category")}>
        <option value='Fullstack Development'>Fullstack Development</option>
        <option value='Backend with Firebase'>Backend with Firebase</option>
        <option value='MERN Stack'>MERN Stack</option>
        <option value='GraphQL Backend'>GraphQL Backend</option>
        <option value='Security'>Security</option>
      </select>
      <button className='border rounded px-1 bg-green-500 text-2xl text-white font-semibold'>Create Course</button>
    </form>
  )
}

export default LogIn