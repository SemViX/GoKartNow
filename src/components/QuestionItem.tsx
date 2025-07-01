'use client'
import { Minus, Plus } from "lucide-react";
import {motion} from "motion/react"
import { useState } from "react";

interface QuestionItemProps{
    question:string;
    answer:string;
}

const QuestionItem = ({question, answer}:QuestionItemProps) => {
    const [isOpen, SetIsOpen] = useState(false)

    const changeState = () => {
        SetIsOpen((prev) => !prev)
    }
  return (
    <motion.div
        className="border-b-2 border-my-border overflow-hidden "
        onClick={changeState}
        variants={{
            close:{
                maxHeight:50
            },
            open:{
                maxHeight:200
            }
        }}
        animate={isOpen?"open" : "close"}
    >
        <div className="flex justify-between px-10 text-my-text hover:text-my-text-muted transition-colors duration-200">
            {isOpen? <Minus/> : <Plus/>}
            <h3 className="text-2xl font-semibold">
                {question}
            </h3>
        </div>
        <p className="mt-5 text-right text-my-text-muted font-semibold text-xl px-10">
            {answer}
        </p>
    </motion.div>
  )
}

export default QuestionItem