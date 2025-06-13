import { ADVANTAGES } from '@/utils/constants'
import React from 'react'
import AdvantageBlock from './AdvantageBlock'

const AdvantagesSection = () => {
  return (
    <section className='container mx-auto h-[400px] flex flex-col items-center justify-center p-5'>
        <h2 className='w-fit text-4xl font-bold  '>
            Чому Go<span className='text-my-accent'>Kart</span>Now?
            <div className='mt-5 flex gap-5 justify-center flex-wrap'>
                {ADVANTAGES.map((item) => (
                    <AdvantageBlock
                        title={item.title}
                        description={item.description}
                        key={item.id}
                    />
                ))}
            </div>
        </h2>
    </section>
  )
}

export default AdvantagesSection