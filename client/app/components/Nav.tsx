import SearchIcon from '@mui/icons-material/Search';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

interface Style {
    navIcons: string;
}

const styles: Style = {
    navIcons: 'text-black hover:bg-black hover:text-white rounded-md p-2'
}

function Nav() {
    return (
        <nav className="bg-white shadow-lg">
            <section className='container mx-auto p-5 flex justify-center gap-8 items-center'>
                <article>
                    <h3 className='text-2xl font-extrabold'>SHOP.CO</h3>
                </article>
                <article className='flex justify-center items-center gap-5'>
                    <article className='flex gap-5'>
                        <label>Shop<KeyboardArrowDownIcon /></label>
                        <Link href={"/sale"} className='nav-btn'>On Sale</Link>
                        <Link href={"/new-arrivals"} className='nav-btn'>New Arrivals</Link>
                        <Link href={"/brands"} className='nav-btn'>Brands</Link>
                    </article>
                    <article className='searchBox'>
                        <label htmlFor="search" className=""><SearchIcon /></label>
                        <input type="text" id="search" placeholder="Search for products, brands and more..." className="bg-transparent outline-none" />
                    </article>
                    <ul className="flex gap-1">
                        <li className={styles.navIcons}><Link href={"/cart"}><ShoppingCart /></Link></li>
                        <li className={styles.navIcons}><Link href={"/wishlist"}><Favorite /></Link></li>
                        <li className={styles.navIcons}><PersonIcon /></li>
                    </ul>
                </article>
            </section>
        </nav>
    );
}

export default Nav;
