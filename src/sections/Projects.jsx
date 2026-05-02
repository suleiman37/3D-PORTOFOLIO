import React, { useState } from 'react'
import { myProjects } from '../constant'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import { Center } from '@react-three/drei'
import DemoComputer from '../components/DemoComputer'

const Projects = () => {
  const [selected,setSelected]=useState(0)
  const current=myProjects[selected]
  const projectLength=myProjects.length

 

  const HANDLE_PRO=(direction)=>{
    setSelected((prevIndex)=>{
      if(direction === 'previous'){
        return prevIndex == projectLength-1? projectLength-4 : prevIndex+1
      }else{
        return prevIndex== projectLength-4? prevIndex+1 : projectLength-2
      }
    })
  }
  return (
    <section className='c-space mt-20' id='work'>
      <p className='head-text mb-2'>My work</p>
      <div className='grid lg:grid-cols-2'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10
         shadow-2xl shadow-secondary-200'>
          <div className='absolute top-0 right-0'>
            <img src={current.spotlight} className='w-full h-96 object-contain rounded-xl'/>
          </div>
        

        <div className='p-3 backdrop-filter backdrop-blur w-fit rounded-lg'
        style={current.logoStyle}>
          <img src={current.logo} className='w-10 shadow-sm' alt='logostyle'/>
        </div>
      

        <div className='flex flex-col text-primary-600 gap-5 my-2'>
          <p className='text-white text-2xl font-semibold annimatedText'>{current.title}</p>
          <p className='animatedText '>{current.desc}</p>
          <p className='animatedText  '>{current.subdesc}</p>
        </div>

        <div className='flex items-center justify-between flex-wrap gap-5 '>
          <div className='flex items-center gap-3'>
            {current.tags.map((tag,index)=>(
              <img key={index} src={tag.path} alt={tag.name} className='w-8 h-7 space-x-4'/>
            ))}
          </div>
          <a className='flex text-white cursor-pointer gap-2'>
            <p>Check Live sites</p>
            <img src='./assets/arrow-up.png' className='h-3 w-3'/>
          </a> 

          <div className="relative flex justify-between space-x-[360px] mx-3">
            <button className='arrow-btn 'onClick={()=>{HANDLE_PRO('previous')}}>
              <img src='./assets/left-arrow.png'/>
            </button>

            <button className='arrow-btn'onClick={()=>{HANDLE_PRO('next')}}>
              <img src='./assets/right-arrow.png'/>
            </button>
              
          </div>
        </div> 
        </div>
        <div className='border-2 border-secondary-300 bg-secondary-200
         h-96 md:h-full max-lg:w-[300] rounded-lg'>
          <Canvas>
            <Center>
            <Suspense fallback={<CanvasLoader/>}>
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,5]}/>
            <group scale={1.5} position={[0,-3,0]} rotation={[0,-0.1,0]}>
              <DemoComputer />
            </group>
            </Suspense>
            </Center>
            
          </Canvas>
         </div>
        </div>

        

      
       
    </section>
  )
}

export default Projects
