import { Email } from '@mui/icons-material'
import React from 'react'

function Newsletter() {
    return (
        <section className='w-full absolute -top-40 md:-top-40 lg:-top-28 p-4'>
            <section className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:justify-between lg:items-center rounded-3xl bg-black container mx-auto py-8 px-10 lg:gap-0'>
                <article className='text-white font-extrabold text-3xl md:text-5xl uppercase'>
                    <h1 className='text-start'>Stay upto date about our latest offers.</h1>
                </article>
                <article className='flex flex-col gap-4 items-center justify-center lg:items-end'>
                    <div className='flex items-center p-4 gap-2 rounded-full bg-white w-full lg:w-80'>
                        <label htmlFor='user-email'>
                            <Email htmlColor='#b0abbe' />
                        </label>
                        <input id='user-email' className='bg-transparent outline-none' type='email' placeholder='Enter your email address' />
                    </div>
                    <a className='text-center w-full lg:w-80 bg-white rounded-full font-semibold p-4 '>Subscribe to Newsletter</a>
                </article>
            </section>
        </section>
    )
}

export default Newsletter