"use client"
import { ShoppingCart } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Search from './Search';
import MenuButton from './MenuButton';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

interface Style {
    navIcons: string;
}

const styles: Style = {
    navIcons: 'text-black hover:bg-black hover:text-white transition rounded-md p-2'
}

function Nav() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Sidebar visible={visible} />
            <nav className="bg-white fixed w-full z-50 top-0 lg:relative shadow-lg">
                <motion.section
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className='container mx-auto p-5 gap-5 flex justify-between md:justify-between lg:justify-center xl:justify-center 2xl:justify-center'
                >
                    <div className='flex gap-2 items-center transition-all'>
                        <MenuButton open={visible ? true : false} visible={visible} setVisible={setVisible} />
                        <h3 className='text-2xl font-extrabold'>SHOP.CO</h3>
                    </div>
                    <article className='flex items-center gap-5'>
                        <article className='hidden lg:flex xl:flex 2xl:flex'>
                            <Dropdown title={"Shop"} items={["Tops", "Bottoms & SleepWear", "Activewear", "Footwear"]} />
                            <Link href={"/sale"} className='nav-btn text-nowrap'>On Sale</Link>
                            <Link href={"/new-arrivals"} className='nav-btn text-nowrap'>New Arrivals</Link>
                            <Link href={"/brands"} className='nav-btn text-nowrap'>Brands</Link>
                        </article>
                        <ul className="flex justify-center gap-1">
                            <Search />
                            <li className={styles.navIcons} style={{}}><Link href={"/cart"}><ShoppingCart /></Link></li>
                            <li className={styles.navIcons}><PersonIcon /></li>
                        </ul>
                    </article>
                </motion.section>
            </nav >
        </>
    );
}

export default Nav;
