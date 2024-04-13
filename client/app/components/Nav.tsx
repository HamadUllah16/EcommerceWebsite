"use client"

import SearchIcon from '@mui/icons-material/Search';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from "framer-motion";
function Nav() {
    return (
        <motion.nav className="bg-white shadow-lg">
            <section className='container mx-auto p-5 flex justify-center gap-8 items-center'>
                <article>
                    <h3 className='text-2xl font-extrabold'>SHOP.CO</h3>
                </article>
                <article className='flex justify-center items-center gap-5'>
                    <article className='flex gap-5'>
                        <label>Shop<KeyboardArrowDownIcon /></label>
                        <a>On Sale</a>
                        <a>New Arrivals</a>
                        <a>Brands</a>
                    </article>
                    <article>
                        <label htmlFor="search" className="searchLabel"><SearchIcon /></label>
                        <input type="text" id="search" placeholder="Search for products, brands and more..." className="search" />
                    </article>
                    <ul className="flex gap-3">
                        <li><ShoppingCart /></li>
                        <li><Favorite /></li>
                        <li><PersonIcon /></li>
                    </ul>
                </article>
            </section>
        </motion.nav>
    )
}

export default Nav
