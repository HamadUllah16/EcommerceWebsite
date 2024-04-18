
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dropdown from "../components/Dropdown"
import Search from "../components/Search"
import AdminSidebar from './AdminSidebar';
import { ReactNode } from 'react';

interface AdminNavProps {
    children: ReactNode;
}

function AdminHome({ children }: AdminNavProps) {
    return (
        <nav className="flex">
            <section className="sidebar border-r-2 w-auto text-nowrap transition-all">
                <article className='flex flex-col p-5'>
                    <AdminSidebar />
                </article>
            </section>
            <section className="w-full h-svh shadow transition-all">
                <article className="flex justify-between items-center p-5">
                    <div>
                        <Search />
                    </div>
                    <div className='flex gap-4'>
                        <NotificationsIcon />
                        <Dropdown title={"Profile"} items={["Name", "Settings", "Logout"]} />
                    </div>
                </article>
                <article>
                    {children}
                </article>
            </section>
        </nav>
    )
}

export default AdminHome
