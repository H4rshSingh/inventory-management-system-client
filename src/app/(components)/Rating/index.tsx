import { Star } from 'lucide-react'
import React from 'react'

type RatingProps = {
    rating: number
}

const Rating = ({ rating }: RatingProps) => {

    return [1, 2, 3, 4, 5].map((star) => (
        <Star
            key={star}
            color={star <= rating ? '#FFC107' : '#E4E5E9'}
            className='w-4 h-4'
        />
        // <span key={star} className={`text-2xl ${star <= props.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
    ))
}

export default Rating