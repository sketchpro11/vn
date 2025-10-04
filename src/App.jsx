import { useState, useEffect, useMemo } from 'react'
import Navigation from './components/Navigation'
import WordAnimator from './components/WordAnimator'
import NewItemsBadge from './components/NewItemsBadge'
import FloatingDock from './components/FloatingDock'
import { ThemeProvider } from './context/ThemeContext'
import { Mail, Download } from 'lucide-react'
import './App.css'
import ShimmerButton from './components/ShimmerButton'
import AwardBadge from './components/AwardBadge'
import { Shield, Zap, Rocket, Star, Lock, Cpu } from 'lucide-react'

// Discord Icon Component
const DiscordIcon = ({ className = '', size = 18 }) => (
  <svg 
    className={className}
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
  </svg>
)

function App() {
  const [blocks, setBlocks] = useState([])

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      6: new Set([0]),
      7: new Set([1]),
      10: new Set([3]),
      12: new Set([7]),
      13: new Set([2, 4]),
      14: new Set([1, 5]),
      15: new Set([3, 6]),
    }),
    []
  )

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window
      const blockSize = innerWidth * 0.06
      const amountOfBlocks = Math.ceil(innerHeight / blockSize)

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className="block-column">
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`block-cell ${
                activeDivs[columnIndex]?.has(rowIndex) ? 'block-cell-active' : ''
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ))
      setBlocks(newBlocks)
    }

    updateBlocks()
    window.addEventListener('resize', updateBlocks)

    return () => window.removeEventListener('resize', updateBlocks)
  }, [activeDivs])

  const words = ['Better', 'Perfect', 'Modern', 'Unique']

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <FloatingDock />
        
        <section className="hero-section">
          {/* Dot Grid Background */}
          <div className="hero-bg-dots"></div>
          
          {/* Gradient Overlay */}
          <div className="hero-bg-gradient"></div>

          {/* SVG Blur Effect */}
          <div className="hero-svg-container">
            <svg
              width="1512"
              height="1714"
              viewBox="0 0 1512 1714"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-svg"
            >
              <g clipPath="url(#clip0_143_13)">
                <g filter="url(#filter0_f_143_13)">
                  <path
                    d="M1045.18 982.551C1129.83 903.957 204.996 477.237 -235.529 294L-339.645 584.211C59.2367 752.376 960.521 1061.15 1045.18 982.551Z"
                    fill="white"
                    fillOpacity="0.15"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_143_13"
                  x="-595.645"
                  y="38"
                  width="1902.26"
                  height="1213.13"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="64"
                    result="effect1_foregroundBlur_143_13"
                  ></feGaussianBlur>
                </filter>
                <clipPath id="clip0_143_13">
                  <rect width="1512" height="1714" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Hero Content */}
          <article className="hero-content">
            <NewItemsBadge />
            
            <h1 className="hero-title">
              <span className="hero-title-small">Don't Just Ship Website,</span>
              <span className="hero-title-main">
                Ship{' '}
                <WordAnimator
                  words={words}
                  duration={3}
                  className="hero-word-animator"
                />
                Ones.
              </span>
            </h1>
            
            <p className="hero-description">
              Premium navigation and components for <strong>VNHAX</strong>.
              Built with <strong>React</strong>, <strong>Vite</strong>, and{' '}
              <strong>Framer Motion</strong>. Save countless hours ⏳, craft
              eye-catching experiences, and turn visitors into loyal customers.
            </p>
            
                <div className="hero-buttons">
                  <button className="hero-primary-btn">
                    <Download className="btn-icon" />
                    <span className="btn-text">Download</span>
                    <div className="btn-shine"></div>
                  </button>

                  <button className="hero-secondary-btn">
                    <DiscordIcon className="btn-icon" />
                    <span className="btn-text">Join Discord</span>
                    <div className="btn-glow"></div>
                  </button>
                </div>
          </article>

          {/* Animated Grid Blocks */}
          <div className="hero-blocks">
            {blocks}
          </div>
        </section>


      </div>
    </ThemeProvider>
  )
}

export default App