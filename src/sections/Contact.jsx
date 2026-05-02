import  Email  from '@emailjs/browser'
import React, { useRef, useState } from 'react'

const Contact = () => {
    const[laoding,setLoading]=useState()
    const [form,setForm]=useState({
        "name":"",
        "Email":"",
        "Massege":""
    })

    const name=useRef()
    const email=useRef()
    const Massege=useRef()
    const handleChange=({name,value})=>{
        setForm({...form,[name]:value})
    }

    const HandleSubmit=(e)=>{
        e.preventDfeault()
        setLoading(true)
        try{
            Email.send(

            {
                from_name:form.name,
                to_name:"Suleiman",
                from_email:form.Email,
                to_email:"Suleiman@solve.code"

            }
        )
        setLoading(false)
        alert("Opration is succesfully")
        }catch(err){
            console.log(err)
            alert(err)
        }
        
    }
  return (
    <section className='c-space my-20' id='contact'>
        <div className=' relative flex justify-center items-center flex-col min-h-screen'>
            <img src='./assets/terminal.png' className='absolute inset-0 h-[1000px] w-full'/>
            <div className='contact-container '>
               <h3 className='head-text mt-40'>Let's Talk</h3>
               <p className='text-primary-600 text-lg mt-2'>Whetever your's looking to build a new website, improve your existing platform , or bring a 
                unique project to life, I am here To help </p>

                <form className='flex flex-col space-y-7 mt-12'>
                    <label className='space-y-3'>
                        <span className='field-label'>FULL NAME</span>
                        <input
                        type='text'
                        placeholder='John Deo'
                        min={4}
                        max={10}
                        name="name"
                        value={form.name}
                        required
                        onChange={handleChange}
                        className='field-input'/>
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>EMAIL</span>
                        <input
                        placeholder='John@solve.code'
                        name="Email"
                        value={form.Email}
                        onChange={handleChange}
                        required
                        className='field-input'
                        />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>EMAIL</span>
                        <textarea
                        type='password'
                        rows={6}
                        min={10}
                        max={20}
                        placeholder="MESSAGE ...."
                        name="Massege"
                        value={form.Password}
                        onChange={handleChange}
                        required
                        className='field-input'/>
                    </label>

                    <button className='field-btn' type='submit' disabled={laoding}>
                        {laoding ? "Sending..." :  "Send Message"}
            
                    </button>
                </form>
            </div>
        </div>
      
    </section>
  )
}

export default Contact
