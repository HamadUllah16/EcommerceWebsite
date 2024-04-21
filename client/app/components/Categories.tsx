import Image from 'next/image'
import React from 'react'
const casual = "/casual.png"
function Categories() {
    return (
        <section className='container mx-auto p-4'>
            <section className='flex flex-col gap-16 items-center justify-center border rounded-3xl p-8' style={{ backgroundColor: "#f0eeed" }}>
                <h1 className='uppercase text-5xl font-extrabold'>Browse By Dress Style</h1>
                <section className='flex flex-col w-full gap-5'>
                    <section className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full justify-center gap-5 items-center'>
                        <article className='w-full md:w-1/3 bg-white rounded-3xl h-64 p-7 overflow-hidden flex justify-between'>
                            <h3 className='text-2xl font-semibold'>Casual</h3>
                        </article>
                        <article className='w-full md:w-2/3 bg-white rounded-3xl h-64 p-7'>
                            <h3 className='text-2xl font-semibold'>Formal</h3>
                        </article>
                    </section>
                    <section className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full justify-center gap-5 items-center'>
                        <article className='w-full md:w-2/3 bg-white rounded-3xl h-64 p-7'>
                            <h3 className='text-2xl font-semibold'>Party</h3>
                        </article>
                        <article className='w-full md:w-1/3 bg-white rounded-3xl h-64 p-7'>
                            <h3 className='text-2xl font-semibold'>Gym</h3>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Categories
