import React from 'react'

function AddProduct() {
    return (
        <article className='flex flex-col gap-10 p-10'>
            <div className='flex justify-end'>
                <button className='rounded-full bg-black p-2 px-5 text-white' type='submit'>Add Product</button>
            </div>
            <div className='flex gap-5'>
                <label>Product Name</label>
                <input className='border-b outline-none' type='text' placeholder='Product Name' />
            </div>
        </article>
    )
}

export default AddProduct
