/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Newsletter from './Newsletter'
import { Facebook, GitHub, Instagram, X } from '@mui/icons-material'

const footerStyle = {
    iconsWrapper: "rounded-full border bg-white p-1",
    icon: "text-md",
    footerHeadlines: "font-medium uppercase tracking-widest"
}

function Footer() {
    return (
        <section style={{ backgroundColor: "#f0eeed" }} className='relative'>
            <Newsletter />
            <section>
                <article className='container mx-auto grid grid-cols-5 py-16 pt-36'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='uppercase font-extrabold text-4xl'>Shop.Co</h1>
                        <p className='secondary-text'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                        <div className='flex gap-3'>
                            <a className={footerStyle.iconsWrapper}><X className={footerStyle.icon} /></a>
                            <a className={footerStyle.iconsWrapper}><Facebook className={footerStyle.icon} /></a>
                            <a className={footerStyle.iconsWrapper}><Instagram className={footerStyle.icon} /></a>
                            <a className={footerStyle.iconsWrapper}><GitHub className={footerStyle.icon} /></a>
                        </div>
                    </div>

                    <div className='flex justify-end'>
                        <ul className='flex flex-col gap-5'>
                            <h1 className={footerStyle.footerHeadlines}>Company</h1>
                            <li><a className='secondary-text'>About</a></li>
                            <li><a className='secondary-text'>Features</a></li>
                            <li><a className='secondary-text'>Works</a></li>
                            <li><a className='secondary-text'>Career</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <ul className='flex flex-col gap-5'>
                            <h1 className={footerStyle.footerHeadlines}>Help</h1>
                            <li><a className='secondary-text'>Customer Support</a></li>
                            <li><a className='secondary-text'>Delivery Details</a></li>
                            <li><a className='secondary-text'>Terms and Conditions</a></li>
                            <li><a className='secondary-text'>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <ul className='flex flex-col gap-5'>
                            <h1 className={footerStyle.footerHeadlines}>FAQ</h1>
                            <li><a className='secondary-text'>Account</a></li>
                            <li><a className='secondary-text'>Manage Deliveries</a></li>
                            <li><a className='secondary-text'>Orders</a></li>
                            <li><a className='secondary-text'>Payments</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <ul className='flex flex-col gap-5'>
                            <h1 className={footerStyle.footerHeadlines}>Resources</h1>
                            <li><a className='secondary-text'>Free eBooks</a></li>
                            <li><a className='secondary-text'>Development Tutorial</a></li>
                            <li><a className='secondary-text'>How to - Blog</a></li>
                            <li><a className='secondary-text'>Youtube Playlist</a></li>
                        </ul>
                    </div>
                </article>
                <hr className='container mx-auto '></hr>

                <article className='flex justify-between container mx-auto py-10 pb-20'>
                    <p className="secondary-text">Shop.co &copy; 2000-2023. All Rights Reserved.</p>
                    <div className='flex gap-2 justify-end'>
                        <div>Visa</div>
                        <div>Mastercard</div>
                        <div>Paypal</div>
                        <div>Apple Pay</div>
                        <div>Google Pay</div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default Footer