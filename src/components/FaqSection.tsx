import { faqData } from '@/utils/constants'
import React from 'react'
import QuestionItem from './QuestionItem'

const FaqSection = () => {
  return (
    <section className='min-h-screen container mx-auto'>
        <h1 className='text-4xl text-my-text font-bold text-center mt-[100px]'>
            Часті запитання
        </h1>
        <div className='flex flex-col gap-4'>
            {faqData.map((item, index) => (
                <QuestionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    </section>
  )
}

export default FaqSection