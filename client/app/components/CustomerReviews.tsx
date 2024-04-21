import React from 'react'
import GenerateStars from './GenerateStars'
import CarousalButtons from './CarousalButtons'

interface reviewType { name: string, rating: number, review: string };

const reviews: reviewType[] = [
    { name: "Sarah M.", rating: 5.0, review: "lorem ipsum" },
    { name: "Sarah M.", rating: 4.5, review: "lorem ipsum" },
    { name: "Sarah M.", rating: 3.5, review: "lorem ipsum" },
]

function CustomerReviews() {
    return (
        <section className='flex flex-col gap-8 container mx-auto py-24'>
            <article className='flex justify-between'>
                <h1 className='uppercase text-5xl font-extrabold'>Our Happy Customers</h1>
                <CarousalButtons />
            </article>
            <article className='flex gap-3 overflow-visible'>
                {
                    reviews.map((item, index) => {
                        return (
                            <article key={index} className='flex flex-col gap-3 border rounded-2xl p-5 h-60 w-auto'>
                                <GenerateStars item={item.rating} />
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-bold text-lg'>{item.name}</h3>
                                    <p className='text-slate-600 text-base'>{item.review} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, modi repellendus.</p>
                                </div>
                            </article>
                        )
                    })
                }
            </article>
        </section>
    )
}

export default CustomerReviews
