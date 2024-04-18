"use client"
import React, { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
interface dropdownType {
    title: string,
    items: string[]
}

const Dropdown: React.FC<dropdownType> = ({ title, items }) => {
    const [show, setShow] = useState(false);
    return (

        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="flex items-center relative">
            <label className="text-nowrap">{title}<KeyboardArrowDownIcon style={{ rotate: show ? "0deg" : "180deg", transition: "0.3s ease" }} /></label>
            <AnimatePresence>
                {show &&
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, scale: 0 }}

                        className="dropdown flex flex-col ">
                        {items.map((item, index) => {
                            return (
                                <Link href={`/${item}`} key={index} className="border-b">{item}</Link>
                            )
                        })}
                    </motion.div>
                }
            </AnimatePresence>

        </div >
    )
}

export default Dropdown
