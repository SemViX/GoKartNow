import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import React from 'react'

interface IButtonProps{
  text: string;
  style: "primary" | "secondary";
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

const Button = ({text, style, icon:Icon, onClick, className}:IButtonProps) => {
  const styles = {
    "primary": "bg-my-primary rounded-xl  text-lg font-bold hover:bg-my-primary-dark hover:text-my-text-muted shadow-lg shadow-my-primary-dark hover:shadow-my-surface",
    "secondary": " border-2 border-my-primary rounded-lg text-md font-semibold hover:border-my-primary-dark hover:bg-my-surface/20 hover:text-my-text-muted shadow-sm shadow-my-primary-dark hover:shadow-my-surface"
  }[style]

  return (
    <button 
      className={clsx("my-3 transition-colors duration-200 ease-in-out flex items-center justify-center gap-3", styles, className)}
      onClick={onClick}
    >
      {text}
      {Icon && <Icon size={20}/>}
    </button>
  )
}

export default Button