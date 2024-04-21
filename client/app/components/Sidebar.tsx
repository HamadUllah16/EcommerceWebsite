import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'

function Sidebar({ visible }: { visible: boolean }) {
    return (
        <section className={`flex shadow-lg top-14 lg:hidden xl:hidden 2xl:hidden flex-col fixed z-50 ${visible ? "w-80" : "w-0"} py-1  h-screen bg-white text-lg overflow-hidden transition-all`}>
            <section className='container mx-auto p-5 flex '>
            </section>
            <Dropdown title={"Shop"} items={["Tops", "Bottoms & SleepWear", "Activewear", "Footwear"]} />
            <Link href={"/sale"} className='nav-btn text-nowrap'>On Sale</Link>
            <Link href={"/new-arrivals"} className='nav-btn text-nowrap'>New Arrivals</Link>
            <Link href={"/brands"} className='nav-btn text-nowrap'>Brands</Link>
        </section>
    )
}

export default Sidebar
