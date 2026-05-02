import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
  const [hascopied,setHascopied]=useState()
  const HANDLE=()=>{
    navigator.clipboard.writeText("Suleima@solve.code")
    setHascopied(true)

    setTimeout(()=>{
      setHascopied(false)
    },3000)
  }
  return (
    <div className='c-space my-20' id='About'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6
      md:grid-cols-2 grid-cols-1 h-full gap-5 '>
   <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='./assets/grid1.png'/>

            <div>
             < p className='grid-headtext'>Hi, I am Suleiman</p>
              <p className='grid-subtext'>With 12 years of exprience , I have honed my skills
                 in frontend and backend devolopement,
                  with a focus on animate 3D websites</p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='./assets/grid2.png'/>

            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>I specializes in JavaScript/TypeScript with a focus on React and
                Next.js ecosystem
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container h-[300px]'>
            <div className='rounded-3xl  flex justify-center items-center
            sm:h-[326px] h-fit'>
              <Globe 
               height={326}
              width={326}
              backgroundColor='rgba(0,0,0,0)'
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              />
            </div>
            <div>
              <p className='grid-headtext'>I work remotly across most timezones</p>
              <p className='grid-subtext'>I'am based in Somalia. with remote work available</p>
              <Button name="Let's work together" isBeam />
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='./assets/grid3.png' className='w-full sm:h-[266px] h-fit object-contain'/>

            <div className=''>
              <p className='grid-headtext'>My Passion For Coding</p>
              <p className='grid-subtext'>
                I love solving Problems and building things through code. 
                conding isn't just my profession.
              </p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='./assets/grid4.png' className='w-full  lg:h-[226px] sm:h-[276px] h-fit object-contain sm:object-top'/>
          </div>
          <div className='spac-y-2 -mt-20'>
            <p className='grid-subtext text-center'>Contact me</p>
            <div className='copy-container' onClick={HANDLE}>
              <img src={`./assets/${hascopied ? "tick" : "copy"}.svg`}/>
              <p className='lg:text-2xl md:text-xl font-medium
              text-gray_gradient text-white'>Suleima@solve.code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About