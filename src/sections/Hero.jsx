import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { HackerRoom } from "../components/HackerRoom"
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import Cube from '../components/cube'
import Rings from '../components/ring'
import {useMediaQuery} from 'react-responsive'

import { calculateSizes } from '../constant'
import Modal from '../components/React'


const Hero = () => {
  const isMobile=useMediaQuery({maxWidth:768})
  const isTablet=useMediaQuery({minWidth:768 ,maxWidth:1024})
  const isSmall=useMediaQuery({maxWidth:440})

  const Size=calculateSizes(isMobile,isTablet,isSmall)

  return (
    <section className=" relative min-h-screen w-full flex flex-col " id="hero">
      

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-primary text-center">
          Hi, I am Sulieman <span className="waving-hand">👋</span>
        </p>
        <p className="text-center text-primary">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute top-28">
        <Canvas
          className="w-full h-full"
        >
          <Suspense>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom scale={Size.deskScale} position={Size.deskPosition} Size/>

            <Cube/>
            
            
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
       
          
        </Canvas>
      </div>
      <div className="absolute top-96 left-[200px] right-0 w-full ">
      <a>
        <button className='border-2 '>
          <span>
            <span className='btn-ping mt-2'/>
            <span className='btn-ping_dot'/>
          </span>
          <span className='text-primary-600'>Let's go together</span>
        </button>
      </a>
      </div>
    </section>
  )
}

export default Hero