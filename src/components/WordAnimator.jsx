import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WordAnimator = ({ words, duration = 2, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'bottom',
      }}
      className={`word-animator ${className}`}
    >
      <span className="word-animator-noise"></span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={currentIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="word-animator-text"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <span style={{ visibility: 'hidden' }}>{words[currentIndex]}</span>
    </span>
  )
}

export default WordAnimator
