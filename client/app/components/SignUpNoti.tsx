"use client";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { motion } from "framer-motion";

function SignUpNoti() {
    const [open, setOpen] = useState(true);

    return (
        <motion.section layout className={`flex bg-black text-stone-500 w-full ${open ? "h-auto" : "h-0"} overflow-hidden justify-center gap-2 font-satoshi`}>
            <p className='font-light'>Sign up and get 20% off to your first order. <a href='/signup' className='underline text-stone-400 hover:text-white '>Sign Up now</a></p>
            <CloseIcon className="hover:text-white cursor-pointer" onClick={() => setOpen(false)} />
        </motion.section>
    )
}

export default SignUpNoti
