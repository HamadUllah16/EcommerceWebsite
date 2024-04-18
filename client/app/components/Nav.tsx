
import { Favorite, ShoppingCart } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Dropdown from './Dropdown';
import Search from './Search';

interface Style {
    navIcons: string;
}

const styles: Style = {
    navIcons: 'text-black hover:bg-black hover:text-white transition rounded-md p-2'
}

function Nav() {
    return (
        <nav className="bg-white shadow-lg">
            <section className='container mx-auto p-5 flex justify-center gap-8 items-center'>
                <article>
                    <h3 className='text-2xl font-extrabold'>SHOP.CO</h3>
                </article>
                <article className='flex justify-center items-center gap-5'>
                    <article className='flex gap-1'>
                        <Dropdown title={"Shop"} items={["Tops", "Bottoms & SleepWear", "Activewear", "Footwear"]} />
                        <Link href={"/sale"} className='nav-btn text-nowrap'>On Sale</Link>
                        <Link href={"/new-arrivals"} className='nav-btn text-nowrap'>New Arrivals</Link>
                        <Link href={"/brands"} className='nav-btn text-nowrap'>Brands</Link>
                    </article>
                    <Search />
                    <ul className="flex gap-1">
                        <li className={styles.navIcons} style={{}}><Link href={"/cart"}><ShoppingCart /></Link></li>
                        <li className={styles.navIcons}><Link href={"/wishlist"}><Favorite /></Link></li>
                        <li className={styles.navIcons}><PersonIcon /></li>
                    </ul>
                </article>
            </section>
        </nav>
    );
}

export default Nav;
