"use client"
import React from 'react'
import {motion} from "motion/react"

interface IAdvantageBlockProps{
    title: string;
    description: string;
}

const AdvantageBlock = ({title, description}:IAdvantageBlockProps) => {
  return (
    <motion.div
        initial={{y:-10, opacity: 0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, duration:0.3, ease:"easeInOut"}}
        className='max-w-[400px] w-full bg-my-surface p-4 rounded-lg border-4 border-my-border'
    >
        <h3 className='text-2xl'>
            {title}
        </h3>
        <p className='text-lg font-light text-my-text-muted'>
            {description}
        </p>
    </motion.div>
  )
}

export default AdvantageBlock