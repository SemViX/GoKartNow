'use client'
import React from 'react'
import {motion} from 'motion/react'

interface IReviewItemProps{
    name:string;
    comment:string;
    city:string;
    avatarUlr: string;
}

const ReviewItem = ({name, comment, city, avatarUlr}:IReviewItemProps) => {
  return (
    <motion.div
        initial={{y:-5, opacity: 0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, duration:0.3, ease:"easeInOut"}}
        className='bg-my-surface rounded-xl p-5 flex gap-2 items-center max-w-[400px]'
    >
        <div
            style={{backgroundImage:`url('${avatarUlr}')`}}
            className='w-[100px] h-[100px] rounded-full bg-cover bg-center bg-no-repeat'
        />
        <div className='flex flex-col gap-3 max-w-[250px]'>
            <h4 className='text-my-primary text-lg font-bold'>
                {name}, <span className='text-my-primary-dark'>{city}</span>
            </h4>

            <p className='text-my-text-muted'>
                {comment}
            </p>
        </div>
    </motion.div>
  )
}

export default ReviewItem