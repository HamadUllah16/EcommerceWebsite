import { Dashboard, Inventory, LocalShipping, Menu, MenuOpen, Person2, Settings } from "@mui/icons-material";
import "./AdminSidebar.css";
import Link from "next/link";



function AdminSidebar() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="font-bold text-2xl"><Menu className="menuClose" /> <MenuOpen className="menuOpen" />  Admin Dashboard</h1>
            <Link href={`/admin/dashboard`} className="capitalize border-b-2 py-2"><Dashboard /> Dashboard</Link>
            <Link href={`/admin/products`} className="capitalize border-b-2 py-2"><Inventory /> Products</Link>
            <Link href={`/admin/customers`} className="capitalize border-b-2 py-2"><Person2 /> Customers</Link>
            <Link href={`/admin/orders`} className="capitalize border-b-2 py-2"><LocalShipping /> Orders</Link>
            <Link href={`/admin/settings`} className="capitalize border-b-2 py-2"><Settings /> Settings</Link>
        </div>
    )
}

export default AdminSidebar
