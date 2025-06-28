import { REVIEWS } from '@/utils/constants'
import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewsSection = () => {
  return (
    <section className='container mx-auto  p-5'>
        <h1 className='text-4xl font-bold text-center'>Відгуки наших клієнтів!</h1>
        <div className='flex gap-5 justify-between flex-wrap mt-5'>
            {
                REVIEWS.map((item) => (
                    <ReviewItem
                        key={item.id}
                        name={item.name}
                        city={item.city}
                        comment={item.comment}
                        avatarUlr={item.avatarUrl}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ReviewsSection