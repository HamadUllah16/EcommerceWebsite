"use client";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function SignUpNoti() {
    const [open, setOpen] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {open &&
                <motion.section exit={{ y: -100 }} className={`flex bg-black text-stone-500 w-full overflow-hidden justify-center gap-2 font-satoshi p-2`}>
                    <p className='font-light'>Under development
                        {/* <a href='/signup' className='underline underline-offset-4 text-stone-400 hover:text-white '>Sign Up now</a> */}
                    </p>
                    <CloseIcon className="hover:text-white cursor-pointer" onClick={() => setOpen(false)} />
                </motion.section>
            }
        </AnimatePresence>

    )
}

export default SignUpNoti
