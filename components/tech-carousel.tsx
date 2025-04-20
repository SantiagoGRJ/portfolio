"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { mockedImagesFrameworks } from "@/app/lib/mocks"

export default function TechCarousel() {
  const technologies = mockedImagesFrameworks
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [autoPlay, setAutoPlay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Set visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 768) {
        setVisibleItems(3)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(5)
      } else {
        setVisibleItems(7)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= technologies.length ? 0 : prevIndex + 1))
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, technologies.length])

  // Pause auto play on hover
  const handleMouseEnter = () => setAutoPlay(false)
  const handleMouseLeave = () => setAutoPlay(true)

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }

    if (isRightSwipe) {
      prevSlide()
    }

    // Reset values
    setTouchStart(0)
    setTouchEnd(0)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= technologies.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? technologies.length - 1 : prevIndex - 1))
  }

  const getVisibleTechnologies = () => {
    const visible = []
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % technologies.length
      visible.push(technologies[index])
    }
    return visible
  }

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div
        className="flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          aria-label="Previous technology"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center items-center space-x-8 py-8 px-12 overflow-hidden">
          {getVisibleTechnologies().map((tech, index) => (
            <div key={index} className="flex flex-col items-center transition-all duration-500 transform">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm p-3">
                <Image
                  src={tech.src || "/placeholder.svg"}
                  alt={tech.alt}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-sm font-medium">{tech.alt}</span>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
          aria-label="Next technology"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: Math.min(5, Math.ceil(technologies.length / visibleItems)) }).map((_, index) => {
          const isActive =
            index === Math.floor(currentIndex / visibleItems) % Math.ceil(technologies.length / visibleItems)
          return (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-gray-800 w-4" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index * visibleItems)}
              aria-label={`Go to slide group ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
