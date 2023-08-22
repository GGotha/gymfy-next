"use client"

import Button from "@/components/Button/Button.core"
import LikeAndFollowText from "@/templates/Home/LikeAndFollowText"
import Image from "next/image"
import { useRouter } from "next/navigation"
import FadeIn from "react-fade-in"

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-wallpaper_home bg-no-repeat bg-cover h-screen md:h-full w-full min-h-[900px]">
      <div className="bg-black bg-opacity-90 h-screen w-full min-h-[900px]">
        <div className="md:mx-32 md:block md:py-0 md:px-0 py-14 mx-0 px-20 h-full flex flex-col items-center justify-center">
          <div className="md:flex md:justify-between md:flex-row md:pt-20 flex-col items-center">
            <FadeIn
              transitionDuration={1000}
              className="md:hover:animate-pulse md:cursor-pointer md:mb-0 mb-20 flex justify-center"
            >
              <Image
                src="/assets/images/logo_without_text.svg"
                alt="logo"
                width={85}
                height={85}
              />
            </FadeIn>

            <FadeIn transitionDuration={1000}>
              <Button onClick={() => router.push("/login")}>Entrar</Button>
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 mt-40">
            <LikeAndFollowText />
          </div>
        </div>
      </div>
    </div>
  )
}
