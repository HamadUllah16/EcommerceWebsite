import AddProduct from '@/app/admin-components/AddProduct'
import AdminHome from '@/app/admin-components/AdminHome'
import React from 'react'

function Products() {
    return (
        <section>
            <AdminHome>
                <AddProduct />
            </AdminHome>
        </section>
    )
}

export default Products
