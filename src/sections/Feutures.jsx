import React from 'react'
import { myProjects, workExperiences } from '../constant'

const Feutures = () => {
  return (
    <div className=' text-white grid lg:grid-cols-2 max-lg:grid-rows-2 lg:space-x-5'>
      <div className='w-[600px] lg:h-100 max-lg:h-40  max-lg:w-[480px] bg-secondary-200 rounded-md ml-16 max-lg:ml-2.5'></div>
      <div className='lg:w-[600px] max-lg:w-[480px] max-lg:-mt-28 max-lg:ml-2.5 h-[500px] px-10 py-3 bg-secondary-600 rounded-md'>
        <div className='grid grid-rows-3 ' >
        {workExperiences.map((data,index)=>(
            <div className='relative p-2 hover:bg-secondary-200 hover:rounded-md hover:px-10  lg:hover:w-[550px] transition duration-300' >
                <div className='flex gap-2'>
                <img src={data.icon} className='-ml-4 size-10 mt-1'/>
                <span className='mt-2'>{data.name}</span>
                </div>
                <span className='ml-7 absolute top-[40px]  text-sm text-white/55'>{data.pos}</span>
                <p className='mt-4 lg:w-80 max-lg:w-[350px] text-sm'>{data.title}</p>
            </div>
            
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Feutures
