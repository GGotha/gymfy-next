import React, { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "text-white w-32 h-10 rounded-lg shadow-xl text-base duration-300 min-h-[40px] animate-bounce bg-black shadow-zinc-900 hover:bg-zinc-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
