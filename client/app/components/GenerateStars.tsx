import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import React from 'react'

function GenerateStars({ item }: { item: number }) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const halfStar = index + 0.4;

        return (
            <span key={index}>
                {item >= index + 1 ? <Star htmlColor='#ffc633' /> : item > halfStar ? <StarHalf htmlColor='#ffc633' /> : <StarBorder htmlColor='#ffc633' />}
            </span>
        )
    })
    return (
        <div>
            {stars}
        </div>
    )
}

export default GenerateStars