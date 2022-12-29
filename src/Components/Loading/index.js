import React from 'react'
import { useSelector } from "react-redux";


export default function Loading() {
 
  const loading = useSelector((state) => state.login?.loading);
  return (
    <>
    {loading &&  <div className='w-full h-full absolute top-0'>
    <div className="animate-spin items-center absolute top-2/4 left-2/4 justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500">
	<div className="h-9 w-9 rounded-full bg-gray-200"></div>
    </div>
    </div>}
    </>
  )
}
