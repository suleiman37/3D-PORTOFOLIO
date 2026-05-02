import React from 'react'
import { clientReviews } from '../constant'

const Clients = () => {
  return (
    <section className='c-space my-20 ' id='cleints'>
      <h3 className='head-text mb-6'>Hear from My Clients</h3>
      <div className='client-conrainer grid grid-cols-1 lg:grid-cols-2 space-x-3'>
        {clientReviews.map((item)=>(
           <div key={item.id} className='client-review mb-3'>
            <p className=' text-primary'>{item.review}</p>
            <div className='client-content'>
              <div className='flex gap-3'>
                <img src={item.img} className='w-12 h-12 rounded-full'/>

                <div className='flex flex-col'>
                  <p className='font-semibold text-primary-800'>{item.name}</p>
                  <p className='text-primary-500 md:text-base font-light text-sm'>{item.position}</p>

                  </div>
                  <div className='flex self-end items-center gap-2'>
                    {Array.from({length:5}).map((_,index)=>(
                      <div key={index}>
                      <img src='./assets/star.png' className='w-5 h-5'/>
                      </div>
                    ))}
                    </div>
                </div>
              </div>
        </div>
        ))}
       
      </div>
      
    </section>
  )
}

export default Clients
