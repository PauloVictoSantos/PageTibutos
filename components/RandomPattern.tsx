"use client"

import Image from "next/image"
import { useMemo } from "react"

type RandomPatternProps = {
  images: string[]
  amount?: number
  opacity?: number
}

export default function RandomPattern({
  images,
  amount = 18,
  opacity = 0.08,
}: RandomPatternProps) {
  const items = useMemo(() => {
    return Array.from({ length: amount }).map((_, i) => {
      const size = Math.floor(Math.random() * 40) + 28 // 28px - 68px
      const top = Math.random() * 100
      const left = Math.random() * 100
      const rotate = Math.random() * 0
      const image = images[Math.floor(Math.random() * images.length)]

      return {
        id: i,
        size,
        top,
        left,
        rotate,
        image,
      }
    })
  }, [amount, images])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            opacity,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}
