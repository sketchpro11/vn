import { useState } from 'react'
import { Home, Download, Video, Store, FileText, Mail, Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import './FloatingDock.css'
import './HideFocusLock.css'

const FloatingDock = () => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const { toggleTheme } = useTheme()

  // Check if device is mobile
  useState(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const dockItems = [
    { title: 'Home', icon: Home, href: '#' },
    { title: 'Download', icon: Download, href: '#download' },
    { title: 'Streamer', icon: Video, href: '#streamer' },
    { title: 'Reseller', icon: Store, href: '#reseller' },
    { title: 'changeLog', icon: FileText, href: '#changelog' },
    { title: 'Proof', icon: Mail, href: '#proof' },
    { title: 'theme change', icon: Palette, href: '#theme' },
  ]

  const handleMouseEnter = (title) => {
    setActiveTooltip(title)
  }

  const handleMouseLeave = () => {
    setActiveTooltip(null)
  }

  const handleTouchStart = (title, e) => {
    e.preventDefault()
    // Don't show tooltips on touch - only on hover
    setActiveTooltip(null)
  }

  const handleTouchEnd = (e) => {
    e.preventDefault()
    // Keep tooltips hidden on touch
    setActiveTooltip(null)
  }

  return (
    <div className="floating-dock-wrapper">
      <div className="floating-dock">
        {dockItems.map((item) => (
          <div key={item.title} className="dock-item-wrapper">
            <a
              href={item.href}
              className={`dock-button ${activeTooltip === item.title ? 'active' : ''}`}
              aria-label={item.title}
              title={item.title}
              tabIndex="0"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(item.title, e)}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault()
                  // Handle theme toggle for the last item
                  if (item.title === 'theme change') {
                    toggleTheme()
                  } else {
                    // Handle navigation after tooltip delay
                    setTimeout(() => {
                      window.location.href = item.href
                    }, 300)
                  }
                } else {
                  // Handle theme toggle for desktop
                  if (item.title === 'theme change') {
                    e.preventDefault()
                    toggleTheme()
                  }
                }
              }}
            >
              <item.icon strokeWidth={1.5} size={20} />
            </a>
            
            {/* React-based tooltip - only show on hover, not on touch */}
            {activeTooltip === item.title && (
              <div className="dock-tooltip">
                <span className="tooltip-text">{item.title}</span>
                <div className="tooltip-arrow"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingDock
