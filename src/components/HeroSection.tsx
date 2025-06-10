'use client'
import {motion} from "motion/react"
import Button from "./UI/Button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { pagesURL } from "@/config/pages-url.config"
const HeroSection = () => {
  const {push} = useRouter()
  return (
    <section
        className='min-h-screen w-screen bg-center bg-cover bg-no-repeat overflow-hidden'
        style={{backgroundImage:"url('/hero-img.jpg')"}}
    >
      <motion.div
        className="h-screen container mx-auto flex flex-col justify-center p-4"
        initial={{y:-5, opacity: 0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, duration: 0.3, ease:"easeInOut"}}
      >
        <h1 className="text-4xl font-bold uppercase">
          Відчуй <span className="text-my-accent">швидкість</span>. Опануй трек.
        </h1>
        <p className="text-lg font-semibold max-w-2xl mt-5">
          Go<span className="text-my-accent">Kart</span>Now — це твій квиток у світ картингу. Обирай трек, бронюй заїзд і мчи вперед — усе просто, швидко й зручно.
        </p>
        <Button 
          text="Забронювати заїзд" 
          style="primary" 
          className="max-w-[250px] w-full h-[50px]"
          onClick={() => push(pagesURL.BOOKING)}
        
        />
        <Button 
          text="Переглянути треки" 
          style="secondary"
          className="max-w-[250px] w-full h-[50px]"
          icon={ArrowRight}
          onClick={() => push(pagesURL.TRACK)}
        />
      </motion.div>
    </section>
  )
}

export default HeroSection