import { ArrowBack, ArrowForward } from '@mui/icons-material'
import React from 'react'

function CarousalButtons() {
    return (
        <div className='flex gap-2'>
            <button><ArrowBack fontSize='large' /></button>
            <button><ArrowForward fontSize='large' /></button>
        </div>
    )
}

export default CarousalButtons